import { useEffect, useState } from "react";
import DishesApi from "@/api/dishes";
import { IDishes, SUCCUSS_CODE } from "@/constants";
import DishesItem from "@/components/dishesItem";

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
            {list.map((item) => (
                <DishesItem
                    key={item.id}
                    emoji={item?.catalog_emoji || ""}
                    name={item?.dish_name}
                />
            ))}
        </div>
    );
};

export default MyDishes;
