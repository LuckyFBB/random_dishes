import { HttpInterface } from "./interface";

class Http implements HttpInterface {
    public post<R, P = {}>(url: string, body?: P): Promise<R> {
        const opts: RequestInit = {
            method: "POST",
            headers: { "content-type": "application/json;charset=UTF-8" },
        };
        const params = body;
        if (params) {
            opts.body = JSON.stringify(params);
        }
        return this.request<R>(url, opts);
    }

    public request<R>(url: string, options?: RequestInit): Promise<R> {
        return fetch(url, options)
            .then((response: any) => {
                return response.json();
            })

            .catch((err: any) => {});
    }
}
export default new Http();
