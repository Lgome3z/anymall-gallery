import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Change it back to this:
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Adds Tailwind compilation straight to Vite
  ],
})