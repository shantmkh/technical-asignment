import { createEffect } from "effector"
import { getProducts } from "utils/api/products";
import { ApiStatuses } from "utils/constants/statuses";

export const getProductsFx = createEffect(async (params: string = '') => {
  const res = await getProducts(`${params}`);

  if (res.status === ApiStatuses.FAILED) {
    throw new Error(res.message);
  }

  return res.data;
})