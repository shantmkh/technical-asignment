
import { ChangeEvent, useMemo } from "react";
import { pageSize } from "utils/constants/generic";
import { OptionSelect, PaginationContainer } from "./styled";

interface Props {
  total: number;
  currentPage: number;
  changePage: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  total,
  currentPage,
  changePage
}) => {
  const { list, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(total / pageSize);
    const list: number[] = [];

    for(let i = 0; i < totalPages; i++) {
      list.push(i + 1)
    }

    return { list, totalPages };
  }, [total]);

  const changeOption = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    changePage(+target.value)
  }

  return (
    <PaginationContainer>
      <span>Page:</span>
      <OptionSelect value={currentPage} onChange={changeOption}>
        {list.map((option) => (
          <option
            key={option}
            value={option}
          >{option}</option>
        ))}
      </OptionSelect>
      <span>of {totalPages}</span>
    </PaginationContainer>
  )
}