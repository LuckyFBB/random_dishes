import { Link } from "umi";
import styles from "./index.less";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>今天吃什么鸭？🥗</div>
            <div className={styles.selects}>
                <Link to="/select" className={styles.select}>
                    🍳 随机菜品
                </Link>
                <Link to="/add" className={styles.select}>
                    🍝 添加菜品
                </Link>
                <Link to="/info" className={styles.select}>
                    💃 菜品信息
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
