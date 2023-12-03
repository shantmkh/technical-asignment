import { createEffect } from "effector"
import { getUsers } from "utils/api/users";
import { ApiStatuses } from "utils/constants/statuses";

export const getUsersFx = createEffect(async ({ params }: { params: string }) => {
  const res = await getUsers(`${params}`);

  if (res.status === ApiStatuses.FAILED) {
    throw new Error(res.message);
  }

  return res.data;
})