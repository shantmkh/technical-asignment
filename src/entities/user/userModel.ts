import { createStore } from "effector";
import { getProductsFx } from "features/home/effects/productEffect";
import { getUsersFx } from "features/users/effects/userEffect";
import { IUser } from "utils/types/mainTypes";

const initialState: {
  users: IUser[];
  error: null | string;
  total: number;
} = {
  users: [],
  error: null,
  total: 0
}

export const $usersStore = createStore(initialState)

$usersStore.on(getUsersFx.doneData, (state, result) => {
  return {
    ...state,
    error: null,
    total: result.totlaCount,
    users: result.data
  }
}).on(getProductsFx.failData, (state) => {
  return {
    ...state,
    error: null,
    users: [],
    total: 0
  }
})