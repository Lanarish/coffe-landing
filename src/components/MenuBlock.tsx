import React from "react";
import { Container, Section, Subtitle, Title } from "../styles/styles";
import styled from "styled-components";

const MenuBlock = () => {
  return (
    <Section>
      <Container>
        <Title>Menu</Title>
        <Subtitle>Coffee popular menu</Subtitle>
        <MenuWrap>
          <Menu>
            <Image src="/assets/img/menu-1.jpg" />
            <MenuTitle>Americano roasted gred</MenuTitle>
            <MenuPrice>$12:00</MenuPrice>
          </Menu>
          <Menu>
            <Image src="/assets/img/menu-2.jpg" />
            <MenuTitle>Americano roasted gred</MenuTitle>
            <MenuPrice>$12:00</MenuPrice>
          </Menu>
          <Menu>
            <Image src="/assets/img/menu-3.jpg" />
            <MenuTitle>Americano roasted gred</MenuTitle>
            <MenuPrice>$12:00</MenuPrice>
          </Menu>
          <Menu>
            <Image src="/assets/img/menu-4.jpg" />
            <MenuTitle>Americano roasted gred</MenuTitle>
            <MenuPrice>$12:00</MenuPrice>
          </Menu>
          <Menu>
            <Image src="/assets/img/menu-5.jpg" />
            <MenuTitle>Americano roasted gred</MenuTitle>
            <MenuPrice>$12:00</MenuPrice>
          </Menu>
          <Menu>
            <Image src="/assets/img/menu-1.jpg" />
            <MenuTitle>Americano roasted gred</MenuTitle>
            <MenuPrice>$12:00</MenuPrice>
          </Menu>
        </MenuWrap>
      </Container>
    </Section>
  );
};

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 36px;
`;
const Menu = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 48%;
  padding: 24px;
  border: 1px solid #32323d;
`;
const Image = styled.img`
  width: 72px;
  height: 72px;
  margin: 0 20px 0;
`;
const MenuTitle = styled.h3`
font: 24px/30px "Righteous", cursive`;

const MenuPrice = styled.p`
  display: block;
  margin: auto;
  color: #c99e71;
  font-size: 18px;
`;

export default MenuBlock;
