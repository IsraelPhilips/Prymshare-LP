import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
}

export default defineConfig({
  plugins: [react()]
})
