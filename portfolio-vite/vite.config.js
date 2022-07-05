import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/global/_variables.scss";
          @import "./src/scss/global/_utilities.scss";
          @import "./src/scss/global/_animations.scss";
          @import "./src/scss/global/_transitions.scss";
          @import "./src/scss/global/_base.scss";
        `
      }
    }
  },
})
