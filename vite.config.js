import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['**/*.spec.js', '**/*.spec.jsx'],
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul', // or 'v8'
      all: true,
    },
  },
})
