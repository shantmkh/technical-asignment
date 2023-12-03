import { createEffect } from "effector"
import { deleteProduct, getProducts, updateProduct } from "utils/api/products";
import { ApiStatuses } from "utils/constants/statuses";
import { IProduct } from "utils/types/mainTypes";

export const getProductsFx = createEffect(async ({ params, prevProducts = [] }: { params: string; prevProducts?: IProduct[] }) => {
  const res = await getProducts(`${params}`);

  if (res.status === ApiStatuses.FAILED) {
    throw new Error(res.message);
  }

  if (prevProducts.length) {
    res.data.data = [...prevProducts, ...res.data.data]
  }

  return res.data;
})

export const deleteProductsFx = createEffect(async (productId: number) => {
  const res = await deleteProduct(`/${productId}`);

  if (res.status === ApiStatuses.FAILED) {
    throw new Error(res.message);
  }

  return res.data;
})

export const updateProductFx = createEffect(async (product: IProduct) => {
  const res = await updateProduct(`/${product.id}`, product);

  if (res.status === ApiStatuses.FAILED) {
    throw new Error(res.message);
  }

  return res.data;
})