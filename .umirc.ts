import { defineConfig } from "umi";

export default defineConfig({
    routes: [{ path: "/", component: "@/pages/home/index" }],
    npmClient: "pnpm",
});
