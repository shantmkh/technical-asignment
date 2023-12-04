import { TableOption } from "utils/types/generic";
import { Td, Tr } from "./styled";
import { IUser } from "utils/types/mainTypes";
import { useNavigate } from "react-router-dom";

type UserType = Pick<IUser, "firstName" | "email" | "age" | "action" | "id">

interface Props {
  user: UserType;
  tableOptions: Array<TableOption>,
}

export const TRow: React.FC<Props> = ({
  user,
  tableOptions
}) => {
  const navigate = useNavigate();

  return (
    <Tr onClick={() => navigate(`/user/${user.id}`)}>
      {tableOptions.map((option) => (
        <Td
          key={option.selector}
          width={option.width}
        >{user[option.selector as keyof UserType]}</Td>
      ))}
    </Tr>
  )
}