import CatalogApi from "@/api/catalog";
import { ICatalog, SUCCUSS_CODE } from "@/constants";
import { Select } from "antd";
import { useEffect, useState } from "react";

const MyCatalog = () => {
    const [catalogList, setCatalogList] = useState<ICatalog[]>([]);

    const queryCatalogList = async () => {
        CatalogApi.queryCatalogList({}).then((res) => {
            if (res.code !== SUCCUSS_CODE) return;
            setCatalogList(res.data ?? []);
        });
    };

    useEffect(() => {
        queryCatalogList();
    }, []);

    return (
        <div>
            {catalogList.map((catalog) => {
                return (
                    <div>
                        {catalog.catalog_emoji}
                        {catalog.catalog_name}
                    </div>
                );
            })}
        </div>
    );
};

export default MyCatalog;
