import { useEffect, useState } from "react";
import DishesApi from "@/api/dishes";
import { IDishes, SUCCUSS_CODE } from "@/constants";

const MyDishes = () => {
    const [list, setList] = useState<IDishes[]>([]);

    const queryCatalogList = async () => {
        DishesApi.queryDishesList().then((res) => {
            if (res.code !== SUCCUSS_CODE) return;
            setList(res.data ?? []);
        });
    };

    useEffect(() => {
        queryCatalogList();
    }, []);

    return (
        <div>
            {list.map((item) => {
                return (
                    <div key={item.id}>
                        {item.catalog_emoji}
                        {item?.dish_name}
                    </div>
                );
            })}
        </div>
    );
};

export default MyDishes;
