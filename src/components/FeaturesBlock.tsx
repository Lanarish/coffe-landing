import React from "react";
import { Container, Section } from "../styles/styles";
import styled from "styled-components";
import { featuresItems } from "../data/featureItems";
import FeatureItems from "./FeatureItems";

const FeaturesBlock = () => {
  return (
    <Container>
      <Section>
        <Features>
          {featuresItems.map((item) => {
            return <FeatureItems key={item.id} {...item} />;
          })}
        </Features>
      </Section>
    </Container>
  );
};
const Features = styled.ol`
  display: flex;
  justify-content: space-between;
  gap: 36px;
  padding: 140px 0 0;
  list-style-type: none;
`;

export default FeaturesBlock;
