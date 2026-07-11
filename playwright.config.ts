import { defineConfig, devices } from "@playwright/test";

// The pre-installed Chromium in this environment may not match the version
// bundled with @playwright/test, so point at it explicitly when present
// (set via PLAYWRIGHT_CHROMIUM_PATH, defaulting to the common install path).
const chromiumPath =
  process.env.PLAYWRIGHT_CHROMIUM_PATH || "/opt/pw-browsers/chromium";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: "list",
  webServer: {
    command: "npm run build && npm run preview",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  use: {
    baseURL: "http://localhost:4321",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        launchOptions: { executablePath: chromiumPath },
      },
    },
  ],
});
