import { Form, Input, Select } from "antd";
import selectStyles from "../select/index.less";
import styles from "./index.less";

const Option = Select.Option;

const Add = () => {
    const [form] = Form.useForm();

    const handleAdd = () => {
        const values = form.getFieldsValue();
    };
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
                            <Option value={1}>蔬菜 🥬</Option>
                            <Option value={2}>肉品 🥩</Option>
                            <Option value={3}>汤品 🥣</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="vegetable">
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
