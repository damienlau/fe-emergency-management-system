import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      common: resolve(__dirname, "packages/common"),
      website: resolve(__dirname, "packages/website"),
    },
  },
  server: {
    port: 2021,
    proxy: {
      "/dev-api": {
        changeOrigin: true,
        target: "http://192.168.1.7:8090/warehouse",
        ws: false,
        rewrite: (path) => path.replace(/^\/dev-api/, ""),
      },
    },
  },
});
