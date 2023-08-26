import { Outlet } from "umi";
import styles from "./index.less";
import "./reset.less";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

export default function Layout() {
    return (
        <ConfigProvider locale={zhCN}>
            <div className={styles.layout}>
                <section className={styles.container}>
                    <Outlet />
                </section>
                <footer className={styles.footer}>
                    Copyright © 2023-{new Date().getFullYear()} Made by FBB 🤸‍♂️
                </footer>
            </div>
        </ConfigProvider>
    );
}
