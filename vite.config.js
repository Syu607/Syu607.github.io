import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/syu607.github.io/",  // Base URL for GitHub Pages deployment
  build: {
    outDir: 'dist'
  }
})
