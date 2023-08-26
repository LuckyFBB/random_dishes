export interface HttpInterface {
    /**
     * HTTP Post method
     * @param url request URL
     * @param body request body object
     */
    post<R, P = {}>(url: string, body?: P): Promise<R>;
}
