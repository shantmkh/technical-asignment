import { BaseApi } from "utils/api/BaseApi";

const http = new BaseApi("/products")

export const getProducts = (url: string = "") => {
  return http.get(url)
}