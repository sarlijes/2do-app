import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://2do:5001",
        changeOrigin: true,
        secure: false
      }
    },
    watch: {
      usePolling: true
    }
  },
  test: {
    environment: 'jsdom'
  }
})
