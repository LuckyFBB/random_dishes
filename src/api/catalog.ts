import http from "@/utils/http";
import { IResponseBody } from "./dishes";

export default {
    queryCatalogList() {
        return http.post<IResponseBody>("/api/catalog/queryCatalogList", {});
    },
};
