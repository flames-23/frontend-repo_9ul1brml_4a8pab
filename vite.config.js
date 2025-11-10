import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    // Enable HMR and file watching to prevent blank screen from disabled HMR
    hmr: true,
    watch: {
      usePolling: true,
    },
    cors: { origin: '*', credentials: true },
    allowedHosts: ['.modal.host', 'localhost', '127.0.0.1']
  }
})
