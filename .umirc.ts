import { defineConfig } from "umi";

export default defineConfig({
    routes: [
        {
            path: "/",
            component: "home",
        },
        { path: "/select", component: "select" },
        { path: "/add", component: "add" },
    ],
    npmClient: "pnpm",
});
