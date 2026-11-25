import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'node:module'
import path from 'node:path'
import chromium from '@sparticuz/chromium'
import puppeteerCore, { type Browser } from 'puppeteer-core'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender') as typeof import('vite-plugin-prerender').default

class ServerlessPuppeteerRenderer extends vitePrerender.PuppeteerRenderer {
  private serverlessBrowser: Browser | null = null

  constructor(rendererOptions: Record<string, unknown>) {
    super()
    Object.assign(this, {
      _rendererOptions: { maxConcurrentRoutes: 0, ...rendererOptions },
    })
  }

  async initialize() {
    if (process.platform !== 'linux') {
      return super.initialize()
    }

    // Vercel's Linux image lacks shared libraries required by Puppeteer's Chromium.
    this.serverlessBrowser = await puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: 'shell',
    })
    Object.assign(this, { _puppeteer: this.serverlessBrowser })

    return this.serverlessBrowser
  }

  destroy() {
    if (process.platform !== 'linux') {
      return super.destroy()
    }

    if (!this.serverlessBrowser) {
      return
    }

    const browser = this.serverlessBrowser
    this.serverlessBrowser = null
    return browser.close()
  }
}

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'es2019',
  },
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.resolve(process.cwd(), 'dist'),
      routes: ['/es', '/en'],
      renderer: new ServerlessPuppeteerRenderer({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        skipThirdPartyRequests: true,
      }),
    }),
  ],
})
