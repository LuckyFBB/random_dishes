import { TYPE } from "@/constants";
import styles from "./index.less";

const DishesItem = (props: {
    emoji: string;
    name: string;
    type?: TYPE.DISHES | TYPE.CATALOG;
}) => {
    const { emoji, name, type = TYPE.DISHES } = props;
    return (
        <div className={styles.item}>
            {emoji}
            <span
                className={`${styles.name} ${
                    type === TYPE.CATALOG ? styles.catalog : ""
                }`}
            >
                {name}
            </span>
        </div>
    );
};

export default DishesItem;
