import { Effect } from "effector";
import { useEffect, useState } from "react";
import { pageSize } from "utils/constants/generic";
import { toQueryString } from "utils/helpers/urlHelper";

type ReturnType = { page: number; changePage: (page: number) => void };
type Args = { search: string, fetcher: Effect<{ params: string; }, any, Error>; searchBy: string };

export const usePagination = ({ fetcher, search, searchBy }: Args): ReturnType => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
    /* eslint-disable-next-line */
  }, [page, search]);

  const fetchData = () => {
    const queryParams = {
      _page: `${page}`,
      limit: `${pageSize}`,
      ...(search && { [`${searchBy}_like`]: search })
    };

    fetcher({ params: toQueryString(queryParams) });
  }

  const changePage = (page: number) => {
    setPage(page);
  }

  return {
    page,
    changePage
  }
}