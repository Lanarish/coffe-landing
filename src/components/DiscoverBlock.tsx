import React from "react";
import { Container, Section, Subtitle, Text } from "../styles/styles";
import styled from "styled-components";

const DiscoverBlock = () => {
  return (
    <Section>
      <Container>
        <DiscoverWrap>
          <Image src="/assets/img/discover.png" />
          <Discover>
            <DiscoverSubtitle>
              Coffee
              <br /> machine, buy for home
            </DiscoverSubtitle>
            <Text>
              mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nib maximus, est eu, mattis nuce. preasent
              ut quam quis quam venen atis fri ngilla. morbi vastibulum id tells
              mmodo mattis. aliauam erat volutpal.
            </Text>
            <DiscoverLink>Discover now</DiscoverLink>
          </Discover>
        </DiscoverWrap>
      </Container>
    </Section>
  );
};

const DiscoverWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  background-color: #1c1814;
  padding: 85px 80px;
`;
const DiscoverSubtitle = styled(Subtitle)`
  text-align: left;
  margin: 0;
`;
const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 360px;
`;
const Discover = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 535px;
`;
const DiscoverLink = styled.a`
  display: block;
  width: 215px;
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

export default DiscoverBlock;
