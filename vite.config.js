// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/bobzila1202.github.io/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Default Vite output directory
  },
})
