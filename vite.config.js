import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/SpatialVID/',
  server: {
    host: true,
    port: 3000
  },
  optimizeDeps: {
    include: ['three', 'gsap']
  }
})