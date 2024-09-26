import React from "react";
import {
  ButtonCommon,
  Container,
  Section,
  Subtitle,
  Title,
} from "../styles/styles";
import styled from "styled-components";
import TestimonialItem from "./TestimonialItem";

const TestimonialBlock = () => {
  return (
    <Section>
      <Container>
        <Title>Testimonial</Title>
        <Subtitle>Says our customers</Subtitle>
        <TestimonialWrap>
          <TestimonialItem />
          <TestimonialItem />
        </TestimonialWrap>
        <TestimonialAction>
          <TestimonialCount>
            <CountText>2/6 People</CountText>
            <ProgressCount value="50" max="100"></ProgressCount>
          </TestimonialCount>
          <TestimonialBtnWrap>
            <ButtonPlayLeft>
              <Image src="/assets/img/arrow-left.png" />
            </ButtonPlayLeft>
            <ButtonPlayRight>
              <Image src="/assets/img/arrow-right.png" />
            </ButtonPlayRight>
          </TestimonialBtnWrap>
        </TestimonialAction>
      </Container>
    </Section>
  );
};

const TestimonialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 0 0 36px;
`;
const TestimonialAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TestimonialCount = styled.div``;
const CountText = styled.p`
  display: block;
  margin: 0 0 20px;
  color: #c99e71;
  font-size: 20px;
`;
const ProgressCount = styled.progress`
  appearance: none;
  width: 120px;
  height: 4px;

  &::-webkit-progress-bar {
    border-radius: 3px;
    background-color: #2b2926;
  }
  &::-webkit-progress-value {
    border-radius: 3px;
    background-color: #c99e71;
  }
`;
const TestimonialBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
const ButtonPlayLeft = styled(ButtonCommon)`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  &:hover {
    background-color: #c99e71;
  }
`;

const ButtonPlayRight = styled(ButtonCommon)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #c99e71;
  padding: 10px;

  &:hover {
    background-color: #1c1814;
  }
`;

const Image = styled.img``;
export default TestimonialBlock;
