import { createStore } from "effector";
import { getProductsFx } from "features/home/effects/productEffect";
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

export const $productStore = createStore(initialState);

$productStore.on(getProductsFx.doneData, (state, data) => {
  return {
    ...state,
    error: null,
    total: data.total,
    products: data.products
  }
}).on(getProductsFx.failData, (state) => {
  return {
    ...state,
    error: null,
    products: [],
    total: 0
  }
})