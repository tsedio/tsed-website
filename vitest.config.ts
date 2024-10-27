import {defineConfig} from "vitest/config";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath} from "node:url";
// configuration for vite
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vitepress/client": fileURLToPath(new URL("test/vitepress.client.ts", import.meta.url))
    }
  },
  test: {
    root: fileURLToPath(new URL("./packages/theme", import.meta.url)),
    environment: "jsdom",
    exclude: ["**/node_modules/**"],
    globals: true,
    setupFiles: [fileURLToPath(new URL("./test/setup.ts", import.meta.url))],
    coverage: {
      enabled: true,
      thresholds: {
        autoUpdate: true,
        statements: 64.74,
        branches: 80.31,
        functions: 69.81,
        lines: 64.74
      },
      include: ["**/*.{ts,vue}"],
      exclude: [
        "index.ts",
        "**/markdown/**",
        "**/interfaces/**",
        "**/__mocks__/**",
        "**/node_modules/**",
        "**/*.spec.ts",
        "**/*.stories.ts",
        "**/utils/colors.ts",
        "tailwind.preset.ts",
        "DefaultTheme.ts"
      ],
      reportsDirectory: fileURLToPath(new URL("./coverage", import.meta.url))
    }
  }
});
