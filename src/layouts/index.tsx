import { Outlet } from "umi";
import styles from "./index.less";
import "./reset.less";

export default function Layout() {
    return (
        <div className={styles.layout}>
            <section className={styles.container}>
                <Outlet />
            </section>
            <footer className={styles.footer}>
                Copyright © 2023-{new Date().getFullYear()} Made by FBB 🤸‍♂️
            </footer>
        </div>
    );
}
