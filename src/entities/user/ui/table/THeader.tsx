import { FlexContainer } from "components/generic/genericStyled";
import { TableOption } from "utils/types/generic";
import { SortOption } from "features/users/ui/UserFt";
import { Th } from "./styled";

interface Props {
  tableOptions: Array<TableOption>,
  sortOption: SortOption,
  setSortOption: (option: SortOption) => void
}

export const THeader: React.FC<Props> = ({
  tableOptions,
  sortOption,
  setSortOption
}) => {
  const setOption = (option: TableOption) => {
    const targetPare: Record<string, "desc" | ""> = {
      asc: "desc",
      desc: "",
    }

    setSortOption({
      selector: option.selector,
      flow: targetPare[sortOption.flow] === undefined ? "asc" : targetPare[sortOption.flow]
    })
  }

  return (
    <FlexContainer>
      {tableOptions.map((option: TableOption) => (
        <Th
          key={option.selector}
          width={option.width}
          onClick={() => option.sortable && setOption(option)}
        >
          <span>{option.title}</span>
          {sortOption.selector === option.selector && (
            sortOption.flow === "asc" ? "↑" : sortOption.flow === "" ? "" : "↓"
          )}
        </Th>
      ))}
    </FlexContainer>
  )
}