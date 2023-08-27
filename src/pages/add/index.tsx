import { Form, Input, message } from "antd";
import selectStyles from "../select/index.less";
import styles from "./index.less";
import DishesApi from "@/api/dishes";
import { useState } from "react";
import { ICatalog, SUCCUSS_CODE } from "@/constants";
import SelectCatalog from "@/components/selectCatalog";

const Add = () => {
    const [form] = Form.useForm();

    const handleAdd = () => {
        const values = form.getFieldsValue();
        DishesApi.addDishes({ ...values }).then((res) => {
            if (res.code !== SUCCUSS_CODE) return message.error(res.msg);
            message.success(res.msg);
            form.resetFields();
        });
    };

    return (
        <div className={selectStyles.container}>
            <span className={selectStyles.title}>添加菜品 🍝 </span>
            <div className={styles.container}>
                <Form form={form}>
                    <Form.Item name="catalog">
                        <SelectCatalog />
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
