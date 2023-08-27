export interface ICatalog {
    catalog_id: number;
    catalog_name: string;
    catalog_emoji: string;
}

export interface IDishes {
    catalog_id: number;
    dish_name: string;
    id: number;
    catalog_emoji?: string;
}

export const SUCCUSS_CODE = 1;

export enum TYPE {
    DISHES = "DISHES",
    CATALOG = "CATALOG",
}
