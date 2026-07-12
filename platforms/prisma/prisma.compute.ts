// @ts-ignore
import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    framework: "custom",
    build: {
      command: "node scripts/inject_vars.js --platform=prisma",
      outputDirectory: ".",
      entrypoint: "backend/dist/prisma/server.js",
    }
  },
});
