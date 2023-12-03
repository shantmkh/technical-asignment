import { useLocation, useNavigate } from "react-router-dom"
import { menuItems } from "routes"
import {
  Main,
  DesktopContainer,
  MenuItem,
  Wrapper,
  MobileContainer,
  Burger,
  MobileList
} from "./styled";
import { useState } from "react";
import { Logo } from "components/generic/genericStyled";

export const Header: React.FC<{}> = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Main>
      <Wrapper>
        <MobileContainer>
          <Burger
            active={isMobileMenuVisible}
            onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
            aria-label="mobile menu"
          >
            <div/>
            <div/>
            <div/>
          </Burger>
          <MobileList active={isMobileMenuVisible}>
            {menuItems.map((item) => (
              <MenuItem
                key={item.name as string}
                onClick={() => navigate(item.path as string)}
                active={item.path === location.pathname}
              >{item.name}</MenuItem>
            ))}
          </MobileList>
        </MobileContainer>
        <Logo onClick={() => navigate("/")}>Logo</Logo>
        <DesktopContainer>
          {menuItems.map((item) => (
            <MenuItem
              key={item.name as string}
              onClick={() => navigate(item.path as string)}
              active={item.path === location.pathname}
            >{item.name}</MenuItem>
          ))}
        </DesktopContainer>
      </Wrapper>
    </Main>
  )
}