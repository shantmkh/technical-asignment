import { BaseApi } from "utils/api/BaseApi";
import { IProduct } from "utils/types/mainTypes";

const http = new BaseApi("/products")

export const getProducts = (url: string = "") => {
  return http.get(url)
}

export const deleteProduct = (url: string = "") => {
  return http.delete(url)
}

export const updateProduct = (url: string, body: IProduct) => {
  return http.put(url, body);
}