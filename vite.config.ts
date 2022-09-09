/// <reference types="vitest" />
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    include: ["src/composables/**/*.test.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
    environment: "jsdom",
    setupFiles: ["src/test/setup.ts"],
  },
  plugins: [vue(), vuetify({ autoImport: true }), eslintPlugin()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
});
