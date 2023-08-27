import CatalogApi from "@/api/catalog";
import DishesItem from "@/components/dishesItem";
import { ICatalog, SUCCUSS_CODE, TYPE } from "@/constants";
import { useEffect, useState } from "react";

const MyCatalog = () => {
    const [catalogList, setCatalogList] = useState<ICatalog[]>([]);

    const queryCatalogList = async () => {
        CatalogApi.queryCatalogList().then((res) => {
            if (res.code !== SUCCUSS_CODE) return;
            setCatalogList(res.data ?? []);
        });
    };

    useEffect(() => {
        queryCatalogList();
    }, []);

    return (
        <div>
            {catalogList.map((catalog) => (
                <DishesItem
                    key={catalog.catalog_id}
                    emoji={catalog?.catalog_emoji || ""}
                    name={catalog?.catalog_name}
                    type={TYPE.CATALOG}
                />
            ))}
        </div>
    );
};

export default MyCatalog;
