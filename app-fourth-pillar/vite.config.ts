import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: "3000",
    open: "."
  },
  css: {
    preprocessorOptions: {
      scss: {
        //silenceDeprecations: ["legacy-js-api"],
        api: 'modern-compiler', // or "modern", "legacy"
        // additionalData: `
        //   @import "./src/assets/styles/_variables.scss";
        // `,
      },
    },
  },
})
