import { Form, Input, Select, message } from "antd";
import selectStyles from "../select/index.less";
import styles from "./index.less";
import DishesApi from "@/api/dishes";
import CatalogApi from "@/api/catalog";
import { useEffect, useState } from "react";
import { ICatalog, SUCCUSS_CODE } from "@/constants";

const Option = Select.Option;

const Add = () => {
    const [form] = Form.useForm();
    const [catalogList, setCatalogList] = useState<ICatalog[]>([]);

    const handleAdd = () => {
        const values = form.getFieldsValue();
        DishesApi.addDishes({ ...values }).then((res) => {
            if (res.code !== SUCCUSS_CODE) return message.error(res.msg);
            message.success(res.msg);
            form.resetFields();
        });
    };

    const queryCatalogList = async () => {
        CatalogApi.queryCatalogList({}).then((res) => {
            if (res.code !== SUCCUSS_CODE) setCatalogList(res.data ?? []);
        });
    };

    useEffect(() => {
        queryCatalogList();
    }, []);

    return (
        <div className={selectStyles.container}>
            <span className={selectStyles.title}>添加菜品 🍝 </span>
            <div className={styles.container}>
                <Form form={form}>
                    <Form.Item name="catalog">
                        <Select
                            placeholder="请选择菜品类别"
                            allowClear
                            className={styles.select}
                        >
                            {catalogList.map((item) => (
                                <Option
                                    value={item.catalog_id}
                                    key={item.catalog_id}
                                >
                                    {item.catalog_emoji} {item.catalog_name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="dishName">
                        <Input placeholder="请输入菜品名称" />
                    </Form.Item>
                </Form>
                <div className={styles.button} onClick={handleAdd}>
                    确认添加
                </div>
            </div>
        </div>
    );
};

export default Add;
