import { useState, useDeferredValue } from "react"
import { FlexContainer, Input } from "components/generic/genericStyled"
import { usePagination } from "utils/hooks/usePagination"
import { UserContainer } from "./styled"
import { getUsersFx } from "../effects/userEffect"
import { useUnit } from "effector-react"
import { $usersStore } from "entities/user/userModel"
import { Table, TableBody } from "entities/user/ui/table/styled"
import { THeader } from "entities/user/ui/table/THeader"
import { TableOption } from "utils/types/generic"
import { TRow } from "entities/user/ui/table/TRow"
import { Pagination } from "entities/user/ui/pagination/Pagination"

export type SortOption = { selector: string; flow: 'desc' | 'asc' | '' };

export const UserFt: React.FC<{}> = () => {
  const { users, total } = useUnit($usersStore);

  const [search, setSearch] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>({ selector: '', flow: ''})

  const searchDebounce = useDeferredValue(search);
  const { page, changePage } = usePagination({ search: searchDebounce, fetcher: getUsersFx, searchBy: "firstName", sortOption });
  const tableOptions: TableOption[] = [
    { sortable: true, selector: "firstName", width: "25%", title: "Name" },
    { sortable: false, selector: "email", width: "25%", title: "Email" },
    { sortable: true, selector: "age", width: "25%", title: "Age" },
    { sortable: false, selector: "action", width: "25%", title: "Actions" }
  ]

  return (
    <UserContainer>
      <FlexContainer justifyType="flex-start">
        <Input aria-label="table search" onChange={(event) => setSearch(event.target.value)} />
      </FlexContainer>
      <Table>
        <THeader
          sortOption={sortOption}
          setSortOption={setSortOption}
          tableOptions={tableOptions}
        ></THeader>
        <TableBody>
          {users.map((user) => (
            <TRow
              key={user.id}
              user={user}
              tableOptions={tableOptions}
            />
          ))}
        </TableBody>
        <FlexContainer justifyType="flex-end">
          <Pagination
            total={total}
            currentPage={page}
            changePage={changePage}
          />
        </FlexContainer>
      </Table>
    </UserContainer>
  )
}
