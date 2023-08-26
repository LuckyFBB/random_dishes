import http from "@/utils/http";
import { IResponseBody } from "./dishes";

export default {
    queryCatalogList(params: {}) {
        return http.post<IResponseBody>("/api/catalog/queryCatalogList", params);
    },
};
