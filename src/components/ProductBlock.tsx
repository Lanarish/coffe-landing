import React from "react";
import { Container, Section, Subtitle, Title } from "../styles/styles";
import styled from "styled-components";
import ProductBlockItem from "./ProductBlockItem";

const ProductBlock = () => {
  return (
    <Section>
      <Container>
        <Title>Popular Product</Title>
        <Subtitle>Coffee popular Product</Subtitle>
        <PopularWrap>
          <ProductBlockItem />
          <ProductBlockItem />
          <ProductBlockItem />
        </PopularWrap>
        <PopularLink href="#">View all product</PopularLink>
      </Container>
    </Section>
  );
};
const PopularWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 36px;
  margin: 0 0 56px;
`;
const PopularLink = styled.a`
  display: block;
  margin: 0 auto;
  width: 252px;
  font: 700 18px "Inter", sans-serif;
  background-color: #c99e71;
  padding: 20px 36px;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  color: white;

  &: hover {
    background-color: #bd864b;
  }
`;

export default ProductBlock;
