import { BaseApi } from "utils/api/BaseApi";

const http = new BaseApi("/users")

export const getUsers = (url: string = "") => {
  return http.get(url)
}