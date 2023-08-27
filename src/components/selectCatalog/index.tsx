import CatalogApi from "@/api/catalog";
import { ICatalog, SUCCUSS_CODE } from "@/constants";
import { Select } from "antd";
import { useEffect, useState } from "react";

const Option = Select.Option;

const SelectCatalog = (props: {
    getCatalog?: (list: ICatalog[]) => void;
    handleChange?: () => void;
    onChange?: (value: number) => void;
}) => {
    const { getCatalog, onChange, handleChange } = props;
    const [catalogList, setCatalogList] = useState<ICatalog[]>([]);

    const queryCatalogList = async () => {
        CatalogApi.queryCatalogList().then((res) => {
            if (res.code !== SUCCUSS_CODE) return;
            setCatalogList(res.data ?? []);
            getCatalog?.(res.data ?? []);
        });
    };

    useEffect(() => {
        queryCatalogList();
    }, []);

    return (
        <Select
            placeholder="请选择菜品类别"
            allowClear
            style={{ width: "100%" }}
            onChange={(value) => {
                onChange?.(value);
                handleChange?.();
            }}
            optionLabelProp="children"
        >
            {catalogList.map((item) => (
                <Option value={item.catalog_id} key={item.catalog_id}>
                    {item.catalog_emoji} {item.catalog_name}
                </Option>
            ))}
        </Select>
    );
};

export default SelectCatalog;
