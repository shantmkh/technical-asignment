import { useState, useDeferredValue } from "react"
import { FlexContainer, Input } from "components/generic/genericStyled"
import { usePagination } from "utils/hooks/usePagination"
import { UserContainer } from "./styled"
import { getUsersFx } from "../effects/userEffect"
import { useUnit } from "effector-react"
import { $usersStore } from "entities/user/userModel"

export const UserFt: React.FC<{}> = () => {
  const { users, total } = useUnit($usersStore);
  const [search, setSearch] = useState<string>("");
  const searchDebounce = useDeferredValue(search);
  const { page, changePage } = usePagination({ search: searchDebounce, fetcher: getUsersFx, searchBy: "firstName" });

  return (
    <UserContainer>
      <FlexContainer justifyType="flex-start">
        <Input onChange={(event) => setSearch(event.target.value)} />
      </FlexContainer>

    </UserContainer>
  )
}
