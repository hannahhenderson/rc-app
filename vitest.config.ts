/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
  },
  resolve: {
    alias: {
      "@cp": path.resolve(__dirname, "src/crackle-pop"),
      "@ttt": path.resolve(__dirname, "src/tic-tac-toe"),
    },
  },
});
