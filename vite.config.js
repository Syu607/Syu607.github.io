import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",  // This will be automatically set to the correct path by GitHub Pages
  build: {
    outDir: 'dist'
  }
})
