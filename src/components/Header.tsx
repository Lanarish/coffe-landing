import styled from "styled-components";
import React from "react";
import { Container } from "../styles/styles";
import { ButtonCommon } from "../styles/styles";

const HeaderBlock = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Header>
          <Navigation>
            <NavList>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Menu</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Reservation</NavLink>
              </NavItem>
            </NavList>
            <Logo src="/assets/img/logo.svg" />
            <NavList>
              <NavItem>
                <NavLink>Pages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Shop</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Contacts</NavLink>
              </NavItem>
            </NavList>
          </Navigation>
          <HeaderButtons>
            <SearchButton>
              <Logo src="/assets/img/search.svg" />
            </SearchButton>
            <CartButton>
              <Logo src="/assets/img/shopping-bag.svg" />
            </CartButton>
          </HeaderButtons>
        </Header>
      </HeaderContainer>
    </HeaderSection>
  );
};


const HeaderSection = styled.header`
  padding: 32px 0;
  background-color: #1c1814;
`;
const HeaderContainer = styled(Container)`
  padding: 0 10px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Navigation = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;
const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  font: 400 18px "Inter", Arial, Helvetica, sans-serif;
  gap: 48px;
`;
const NavItem = styled.li`
  list-style-type: none;

  &:hover {
    color: #c99e71;
    font-weight: 700;
  }
`;
const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 0.4s;
`;
const Logo = styled.img`
max-width:100%;
max-height:100%:`;

const HeaderButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin: 0 0 0 48px;
`;
const SearchButton = styled(ButtonCommon)`

  &:hover {
    color: #c99e71;
    font-weight: 700;
  }
`;
const CartButton = styled(ButtonCommon)`
  &:hover {
    color: #c99e71;
    font-weight: 700;
  }
`;

export default HeaderBlock;
