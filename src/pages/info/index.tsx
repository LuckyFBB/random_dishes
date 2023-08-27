import { Tabs, TabsProps } from "antd";
import selectStyles from "../select/index.less";
import styles from "./index.less";
import MyDishes from "./components/myDishes";
import { useState } from "react";
import MyCatalog from "./components/myCatalog";

const Info = () => {
    const items: TabsProps["items"] = [
        {
            key: "dishes",
            label: "菜品列表",
            children: <MyDishes />,
        },
        {
            key: "catalog",
            label: "菜品分类",
            children: <MyDishes />,
        },
    ];

    const [activeKey, setActiveKey] = useState("dishes");
    return (
        <div className={`${selectStyles.container}`}>
            <span className={selectStyles.title}>菜品信息 💃 </span>
            <div className={styles.info}>
                <div className={styles.tab}>
                    {items.map((item) => (
                        <div
                            className={`${styles.item} ${
                                item.key === activeKey && styles.active
                            }`}
                            onClick={() => {
                                setActiveKey(item.key);
                            }}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                <div className={styles.content}>
                    {activeKey === "dishes" && <MyDishes />}
                    {activeKey === "catalog" && <MyCatalog />}
                </div>
            </div>
        </div>
    );
};

export default Info;
