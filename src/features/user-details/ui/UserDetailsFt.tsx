import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getUserFx } from "../effects/userEffect";
import { useUnit } from "effector-react";
import { $userStore } from "entities/user-details/models/userModel";
import { UserContainer } from "./styled";
import { Button, FlexContainer } from "components/generic/genericStyled";
import { UserDetails } from "entities/user-details/ui/UserDetails";

export const UserDetailsFt: React.FC<{}> = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const { user } = useUnit($userStore);

  useEffect(() => {
    // id
    id && getUserFx(id)
  }, [id])

  console.log(user)
  return (
    <UserContainer>
      <FlexContainer>
        <Button aria-label="back to users" onClick={() => navigation("/users")} variant="blueLink">← Back</Button>
      </FlexContainer>
      {user ? (
        <UserDetails user={user}></UserDetails>
      ) : (
        "Loading..."
      )}
    </UserContainer>
  )
}