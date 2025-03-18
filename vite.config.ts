import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      "ae02-201-182-236-128.ngrok-free.app" // Substitua pelo seu domínio do Ngrok
    ]
  }
})
