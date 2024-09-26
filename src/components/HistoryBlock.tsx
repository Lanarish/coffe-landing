import React from "react";
import { Container, Section, Subtitle, Text, Title } from "../styles/styles";
import styled from "styled-components";

const HistoryBlock = () => {
  return (
    <Section>
      <Container>
        <HistoryWrap>
          <HistoryWrapImg src="/assets/img/feature-2.jpg" />
          <HistoryWrapImg src="/assets/img/feature-3.jpg" />
          <HistoryWrapImg src="/assets/img/feature-4.jpg" />
          <History>
            <HistoryTitle>Our history</HistoryTitle>
            <HistorySubtitle>
              Create a <br />
              new story with us
            </HistorySubtitle>
            <HistoryText>
              mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nibh maximus, est eu, mattis nuce.
              preasent ut quam quis quam venen atis fringilla. morbi vastibulum
              id tells mmodo mattis. aliauam erat volutpal.
            </HistoryText>
          </History>
        </HistoryWrap>
      </Container>
    </Section>
  );
};
const HistoryWrap = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 50%;
  grid-template-rows: repeat(2, 1fr);
  align-items: stretch;
  gap: 32px;
`;
const HistoryWrapImg = styled.img`
  &:first-child {
    grid-column: 1/2;
    grid-row: 1/2;
    width: -webkit-fill-available;
  }
  &:nth-child(2) {
    grid-column: 1/2;
    grid-row: 2/3;
    width: -webkit-fill-available;
  }
  &:nth-child(3) {
    grid-column: 2/3;
    grid-row: 1/3;
    width: -webkit-fill-available;
  }
`;
const History = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 3/4;
  grid-row: 1/3;
  padding: 0 56px;
  background-color: #1c1814;
`;
const HistoryTitle = styled(Title)`
  text-align: left;
`;
const HistorySubtitle = styled(Subtitle)`
  text-align: left;
  margin: 0 0 36px;
`;
const HistoryText = styled(Text)``;

export default HistoryBlock;
