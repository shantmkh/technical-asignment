import { createEvent, createStore } from "effector";
import { getProductsFx } from "features/home/effects/productEffect";
import { getUserFx } from "features/user-details/effects/userEffect";
import { IUser } from "utils/types/mainTypes";

const initialState: {
  user: IUser | null;
  error: null | string;
} = {
  user: null,
  error: null
}

export const $userStore = createStore(initialState)

export const anullerUser = createEvent();

$userStore.on(getUserFx.doneData, (state, result) => {
  return {
    ...state,
    error: null,
    user: result.data
  }
}).on(getProductsFx.failData, (state) => {
  return {
    ...state,
    error: null,
    user: null
  }
}).on(anullerUser, () => initialState)