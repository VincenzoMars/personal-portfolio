import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/_variables.scss";
          @import "./src/styles/_utilities.scss";
          @import "./src/styles/_animations.scss";
          @import "./src/styles/_transitions.scss";
          @import "./src/styles/_base.scss";
        `
      }
    }
  },
})
