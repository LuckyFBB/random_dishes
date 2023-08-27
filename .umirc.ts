import { defineConfig } from "umi";

export default defineConfig({
    routes: [
        { path: "/", component: "home" },
        { path: "/select", component: "select" },
        { path: "/add", component: "add" },
        { path: "/info", component: "info" },
    ],
    proxy: {
        "/api": {
            target: "http://localhost:3000/",
            changeOrigin: true,
            pathRewrite: { "^/api": "" },
        },
    },
    npmClient: "pnpm",
});
