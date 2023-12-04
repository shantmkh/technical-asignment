import { createEffect } from "effector";
import { getUserById } from "utils/api/users";
import { ApiStatuses } from "utils/constants/statuses";

export const getUserFx = createEffect(async (id: string) => {
  const res = await getUserById(`/${id}`);

  if (res.status === ApiStatuses.FAILED) {
    throw new Error(res.message);
  }

  return res.data;
})