import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), viteTsconfigPaths()],
    server: {
      port: Number(process.env.VITE_CLIENT_PORT),
    },
    preview: {
      port: Number(process.env.VITE_CLIENT_PORT),
    },
  };
});
