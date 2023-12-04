import { FlexContainer } from "components/generic/genericStyled";
import { IUser } from "utils/types/mainTypes";
import { UserAddress, UserContainer, UserEmail, UserImage, UserName, UserWrapper } from "./styled";

interface Props {
  user: IUser
}

export const UserDetails: React.FC<Props> = ({
  user
}) => {

  return (
    <FlexContainer justifyType="center">
      <UserContainer>
        <UserWrapper>
          <UserImage src={user.image} alt={user.firstName} />
        </UserWrapper>
        <FlexContainer flexDirection="column" alignItems="center">
          <UserName>{user.firstName} {user.lastName}</UserName>
          <UserEmail>{user.email} {user.action}</UserEmail>
          <UserAddress>{user.address.address}, {user.address.city}, {user.address.postalCode}</UserAddress>
        </FlexContainer> 
      </UserContainer>
    </FlexContainer>
  )
}