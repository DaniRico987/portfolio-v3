import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRequire } from 'node:module'
import path from 'node:path'

const require = createRequire(import.meta.url)
const vitePrerender = require('vite-plugin-prerender') as typeof import('vite-plugin-prerender').default

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
      renderer: new vitePrerender.PuppeteerRenderer({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        skipThirdPartyRequests: true,
      }),
    }),
  ],
})
