import selectStyles from "../select/index.less";
import styles from "./index.less";

const Add = () => {
    return (
        <div className={selectStyles.container}>
            <span className={selectStyles.title}>添加菜品 🍝 </span>
            <div className={styles.container}>
                <input></input>
                <select></select>
                <div>确认添加</div>
            </div>
        </div>
    );
};

export default Add;
