import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  // Bundle MUI into the prerender build: its ESM uses directory imports that Node can't resolve.
  ssr: { noExternal: [/^@mui\//] },
})
