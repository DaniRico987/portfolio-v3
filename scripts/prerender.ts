/// <reference types="node" />
import fs from "fs";
import path from "path";
import { spawn, type ChildProcess } from "node:child_process";

const PREVIEW_URL = "http://localhost:4173";
const ROUTES = ["/es", "/en"] as const;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url: string, retries = 60) {
  for (let attempt = 0; attempt < retries; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {
      // Ignore network errors until server boots.
    }

    await sleep(500);
  }

  throw new Error("No se pudo iniciar vite preview en el tiempo esperado.");
}

function startPreview(): ChildProcess {
  return spawn("npm run preview -- --host localhost --port 4173", {
    cwd: process.cwd(),
    shell: true,
    stdio: "pipe",
  });
}

function stopPreview(processRef: ChildProcess) {
  if (!processRef.killed) {
    processRef.kill("SIGTERM");
  }
}

async function prerender() {
  const previewProcess = startPreview();

  previewProcess.stdout?.on("data", () => {
    // Keep stdout consumed so process buffers do not block.
  });

  previewProcess.stderr?.on("data", () => {
    // Keep stderr consumed so process buffers do not block.
  });

  try {
    await waitForServer(`${PREVIEW_URL}/es`);

    for (const route of ROUTES) {
      const response = await fetch(`${PREVIEW_URL}${route}`);
      if (!response.ok) {
        throw new Error(`Fallo al obtener ${route}: ${response.status}`);
      }

      const html = await response.text();
      const outputDir = path.join(process.cwd(), "dist", route.slice(1));
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(path.join(outputDir, "index.html"), html, "utf-8");
    }

    console.log("✓ Prerender completado — /es /en");
  } finally {
    stopPreview(previewProcess);
  }
}

await prerender();
