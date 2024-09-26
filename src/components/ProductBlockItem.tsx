import React from "react";
import styled from "styled-components";
import { ButtonCommon } from "../styles/styles";

const ProductBlockItem = () => {
  return (
    <Popular>
      <Image src="/assets/img/popular-1.jpg" />
      <Rating>
        <RatingTitle>Coffee</RatingTitle>
        <RatingList>
          <RatingItem>
            <ImageItem src="/assets/img/star.svg" />
            <ImageItem src="/assets/img/star.svg" />
            <ImageItem src="/assets/img/star.svg" />
            <ImageItem src="/assets/img/star.svg" />
            <ImageItem src="/assets/img/star-empty.svg" />
          </RatingItem>
        </RatingList>
      </Rating>
      <PopularTitle>brazil coffee gred</PopularTitle>
      <PopularPrice>Price - $320.00/ $358</PopularPrice>
      <PopularButton>
        <ImageCart src="/assets/img/shopping-bag.svg" />
        Add to cart
      </PopularButton>
    </Popular>
  );
};

const Popular = styled.div`
  padding: 48px 48px 40px 48px;
  background-color: #121315;
  text-align: center;
  text-transform: uppercase;
`;
const Image = styled.img`
  display: block;
  margin: 0 0 36px;
`;
export const Rating = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  color: #c99e71;
  line-height: 18px;
`;
export const ImageItem = styled.img`
  width: 16px;
  height: 16px;
`;
const ImageCart = styled.img`
  width: 16px;
  height: 16px;
`;
const RatingTitle = styled.h4`
  font-weight: 500;
`;
export const RatingList = styled.ul`
  list-style-type: none;
`;
export const RatingItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 7px;
  list-style-type: none;
`;
const PopularTitle = styled.h3`
  font: 24px/30px "Righteous", cursive;
  margin: 15px 0 20px;
`;
const PopularPrice = styled.p`
  display: block;
  font-size: 18px;
  font-weight: 600;
`;
const PopularButton = styled(ButtonCommon)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font: 600 18px/22px "Urbanist", sans-serif;
  background-color: #c99e71;
  padding: 13px 20px;
  text-transform: none;
  text-align: center;
  margin: 38px auto 0;

  &: hover {
    background-color: #bd864b;
  }
`;

export default ProductBlockItem;
