import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
    specPattern: "./src/**/*.spec.cy.{js,jsx,ts,tsx}",
    video: false,
  },
  viewportWidth: 1075,
  viewportHeight: 825,
});
