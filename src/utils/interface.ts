export interface HttpInterface {
    /**
     * HTTP Post method
     * @param url request URL
     * @param body request body object
     */
    post<R, P = any>(url: string, body?: P): Promise<R>;
}
