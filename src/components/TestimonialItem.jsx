import React from "react";
import styled from "styled-components";
import { Text} from "../styles/styles";
import { ImageItem, RatingItem, RatingList } from "./ProductBlockItem";

const TestimonialItem = () => {
  return (
    <Testimonial>
      <TestimonialData>
        <Image src="/assets/img/testimonial-1.jpg" />
        <TestimonialText>
          Education WP is a special build for effective education & Learning
          Management System site. Education WP is the next generation & one of
          the best education WordPress themes which all the strength of
          eLearning WP.
        </TestimonialText>
      </TestimonialData>
      <TestimonialInfo>
        <TestimonialPerson>
          <TestimonialName>John Smith</TestimonialName>
          <TestimonialPosition>Product Designer</TestimonialPosition>
        </TestimonialPerson>
        <TestimonialRatingList>
          <TestimonialRatingItem>
            <TestimonialImageItem src="/assets/img/star.svg" />
            <TestimonialImageItem src="/assets/img/star.svg" />
            <TestimonialImageItem src="/assets/img/star.svg" />
            <TestimonialImageItem src="/assets/img/star.svg" />
            <TestimonialImageItem src="/assets/img/star.svg" />
          </TestimonialRatingItem>
        </TestimonialRatingList>
      </TestimonialInfo>
    </Testimonial>
  );
};

const Testimonial = styled.div`
  padding: 40px;
  background-color: #1c1814;
`;
const TestimonialData = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;
const Image = styled.img`
  display: block;
  width: 129px;
  height: 149px;
`;
const TestimonialText = styled(Text)`
  font: 500 14px/22px "Urbanist", sans-serif;
`;
const TestimonialInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 28px 0 0;
`;
const TestimonialName = styled.span`
  display: block;
  margin: 0 0 4px;
  font-size: 18px;
  line-height: 22px;
`;
const TestimonialPosition = styled.span`
  font-size: 14px;
  line-height: 25px;
  opacity: 0.5;
`;

const TestimonialRatingList = styled(RatingList)``;
const TestimonialRatingItem = styled(RatingItem)`
  align-items: flex-end;
`;
const TestimonialImageItem = styled(ImageItem)``;

const TestimonialPerson = styled.div``;

export default TestimonialItem;
