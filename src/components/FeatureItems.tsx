import React, { FC } from "react";
import styled from "styled-components";
import { Item } from "../data/featureItems";

const FeatureItems: FC<Item> = ({ id, url, text }) => {
  return (
    <FeaturesItemBlock>
      <FeaturesItem>{id}</FeaturesItem>
      <FeaturesItemText>{text}</FeaturesItemText>

      <FeaturesImg src={url} />
    </FeaturesItemBlock>
  );
};

const FeaturesItemBlock = styled.li`
  list-style-type: none;
`;

const FeaturesItemText = styled.span`
  font: 24px/30px "Righteous", cursive;
`;
const FeaturesItem = styled(FeaturesItemText)`
  margin: 0 12px 0 0;
  color: #c99e71;
`;
const FeaturesImg = styled.img`
  display: block;
  margin: 24px 0 0;
`;
export default FeatureItems;
