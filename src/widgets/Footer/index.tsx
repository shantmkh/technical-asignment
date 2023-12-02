import { Logo } from "components/generic/genericStyled"
import { CopyRight, FooterContainer, Main } from "./styled"

export const Footer: React.FC<{}> = () => {
  return (
    <Main>
      <FooterContainer>
        <Logo>Logo</Logo>
        <CopyRight>© Copyright 2023 Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CopyRight>
      </FooterContainer>
    </Main>
  )
}