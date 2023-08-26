import http from "@/utils/http";

export interface IResponseBody<T = any> {
    code: number;
    msg: string;
    data: T;
}

export default {
    addDishes(params: { catalog: number; dishName: string }) {
        return http.post<IResponseBody>("/api/dishes/addDishes", params);
    },
};
