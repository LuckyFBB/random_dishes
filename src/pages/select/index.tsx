import { Form, InputNumber, message } from "antd";
import styles from "./index.less";
import { useState } from "react";
import Button from "@/components/button";
import SelectCatalog from "@/components/selectCatalog";
import { ICatalog, SUCCUSS_CODE } from "@/constants";
import DishesApi from "@/api/dishes";

export interface IAddRandom {
    catalogId: number;
    number: number;
}

export interface IRandomItem {
    id: number;
    catalog_emoji: string;
    catalog_id: number;
    dish_name: string;
}
const Random = () => {
    const [select, setSelect] = useState<IAddRandom[]>([]);
    const [catalogList, setCatalogList] = useState<ICatalog[]>([]);
    const [randomList, setRandomList] = useState<IRandomItem[]>([]);

    const [form] = Form.useForm();

    const handleAdd = () => {
        const values: IAddRandom = form.getFieldsValue();
        if (!values.catalogId || !values.number)
            return message.error("请选择正确的数据");
        if (select.some((catalog) => catalog.catalogId === values.catalogId))
            return message.error("当前分类已经存在");
        setSelect((pre) => [...pre, { ...values }]);
        form.resetFields();
    };

    const handleDelete = (catalogId: number) => {
        const index = select.findIndex(
            (catalog) => catalog.catalogId === catalogId
        );
        select.splice(index, 1);
        setSelect([...select]);
    };

    const handleRandom = () => {
        DishesApi.randomDishes({ random: select }).then((res) => {
            if (res.code !== SUCCUSS_CODE) return;
            setRandomList(res.data);
        });
    };

    return (
        <div className={styles.container}>
            <span className={styles.title}>随机生成菜品 🍳</span>
            <div className={styles.content}>
                <div className={styles.selectContainer}>
                    <Form form={form}>
                        <Form.Item name="catalogId">
                            <SelectCatalog
                                getCatalog={(list) => setCatalogList(list)}
                                handleChange={() =>
                                    form.resetFields(["number"])
                                }
                            />
                        </Form.Item>
                        <Form.Item name="number">
                            <InputNumber
                                min={1}
                                max={10}
                                placeholder="请输入当前菜品的数量"
                                className={styles.input}
                            />
                        </Form.Item>
                    </Form>
                    <Button theme="light" onClick={handleAdd}>
                        添加
                    </Button>
                </div>
                <div className={styles.random}>
                    <div className={styles.items}>
                        {select.map((item) => {
                            const catalog = catalogList.find(
                                (catalog) =>
                                    catalog.catalog_id === item.catalogId
                            );
                            return (
                                <div
                                    key={catalog?.catalog_id}
                                    className={styles.item}
                                >
                                    <span>{catalog?.catalog_emoji}</span>
                                    <span className={styles.name}>
                                        {catalog?.catalog_name}
                                    </span>
                                    <span className={styles.number}>
                                        {item.number}
                                    </span>
                                    <div
                                        onClick={() =>
                                            handleDelete(item.catalogId)
                                        }
                                    >
                                        ❌
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {!!select.length && (
                        <Button theme="light" onClick={handleRandom}>
                            生成菜品
                        </Button>
                    )}
                    {!!randomList.length && (
                        <div className={styles.list}>
                            {randomList?.map((item) => {
                                return (
                                    <div key={item?.id} className={styles.item}>
                                        <span className={styles.emoji}>
                                            {item?.catalog_emoji}
                                        </span>
                                        <span className={styles.name}>
                                            {item?.dish_name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Random;
