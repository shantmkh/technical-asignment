import { createStore, sample } from "effector";
import { deleteProductsFx, getProductsFx, updateProductFx } from "features/home/effects/productEffect";
import { pageSize } from "utils/constants/generic";
import { IProduct } from "utils/types/mainTypes";

const initialState: {
  products: IProduct[];
  error: null | string;
  total: number;
} = {
  products: [],
  error: null,
  total: 0
}

export const $productStore = createStore(initialState)

sample({
  clock: deleteProductsFx.done,
  source: $productStore,
  fn: () => {
    return { params: `?_page=1&limit=${pageSize}` }
  },
  target: getProductsFx,
});

sample({
  clock: updateProductFx.done,
  source: $productStore,
  fn: () => {
    return { params: `?_page=1&limit=${pageSize}`, prevProducts: [] }
  },
  target: getProductsFx,
});

$productStore.on(getProductsFx.doneData, (state, result) => {
  return {
    ...state,
    error: null,
    total: result.totlaCount,
    products: result.data
  }
}).on(getProductsFx.failData, (state) => {
  return {
    ...state,
    error: null,
    products: [],
    total: 0
  }
})