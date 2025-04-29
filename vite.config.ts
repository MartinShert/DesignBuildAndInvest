import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  
  // https://vitejs.dev/config/
  export default defineConfig({
    .server.allowedHosts: "gskq99-5173.csb.app",
      plugins: [react()],
  });
  