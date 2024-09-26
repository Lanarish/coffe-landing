import React from "react";
import { Container, Section, Subtitle, Title } from "../styles/styles";
import styled from "styled-components";

const NewsBlock = () => {
  return (
    <Section>
      <Container>
        <Title>Testimonial</Title>
        <Subtitle>Our latest news</Subtitle>
        <NewsWrap>
          <News>
            <Image src="/assets/img/news-1.jpg" />
            <NewsDescription>
              <NewsInfo>
                <NewsAuthor>By: rasaline</NewsAuthor>
                <NewsDate>2021-01-21 </NewsDate>
              </NewsInfo>
              <NewsText>Ideal cocktails from barmen....</NewsText>
              <NewsLink href="#"> Read more </NewsLink>
            </NewsDescription>
          </News>
          <News>
            <Image src="/assets/img/news-2.jpg" />
            <NewsDescription>
              <NewsInfo>
                <NewsAuthor>By: rasaline</NewsAuthor>
                <NewsDate>2021-01-21 </NewsDate>
              </NewsInfo>
              <NewsText>Ideal cocktails from barmen....</NewsText>
              <NewsLink href="#"> Read more </NewsLink>
            </NewsDescription>
          </News>
          <News>
            <Image src="/assets/img/news-3.jpg" />
            <NewsDescription>
              <NewsInfo>
                <NewsAuthor>By: rasaline</NewsAuthor>
                <NewsDate>2021-01-21 </NewsDate>
              </NewsInfo>
              <NewsText>Ideal cocktails from barmen....</NewsText>
              <NewsLink href="#"> Read more </NewsLink>
            </NewsDescription>
          </News>
        </NewsWrap>
      </Container>
    </Section>
  );
};

const NewsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 36px;
`;
const News = styled.div``;
const Image = styled.img`
  display: block;
`;
const NewsDescription = styled.div`
  padding: 20px 24px 30px 24px;
  bg-color: #1c1814;
`;
const NewsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 36px;
  margin: 0 0 16px;
  font-size: 18px;
`;
const NewsAuthor = styled.p``;
const NewsDate = styled.p``;
const NewsText = styled.p`
  font: 24px/30px "Righteous", cursive;
  margin: 0 0 32px;
`;
const NewsLink = styled.a`
  display: flex;
  align-items: center;
  color: #c99e71;
  text-decoration: none;

  &:hover {
    color: #bd864b;
  }
`;

export default NewsBlock;
