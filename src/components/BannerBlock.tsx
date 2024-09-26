import React from "react";
import styled from "styled-components";
import { Container } from "../styles/styles";
import { ButtonCommon } from "../styles/styles";

export const BannerBlock = () => {
  return (
    <BannerSection>
      <Container>
        <Banner>
          <BannerInfo>
            <BannerHeader>Enjoy Your Morning Coffee.</BannerHeader>
            <BannerText>
              The coffee is brewed by fist roasting the green coffee beans over
              hot coals in brazier. given to Opportunity
            </BannerText>
            <BannerButton>Test Coffee</BannerButton>
          </BannerInfo>
          <ButtonPlay>Play Video</ButtonPlay>
        </Banner>
      </Container>
    </BannerSection>
  );
};
const BannerSection = styled.section`
  background: url(/assets/img/banner.jpg) 50% 0% / cover no-repeat;
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 146px 0 158px;
`;
const BannerInfo = styled.div`
  max-width: 530px;
`;
const BannerHeader = styled.h2`
  font: 72px/94px "Righteous", cursive;
`;
const BannerText = styled.p`
  margin: 32px 0 64px;
  font-size: 20px;
  line-height: 36px;
  opacity: 0.8;
  text-transform: capitalize;
`;
const BannerButton = styled(ButtonCommon)`
  font: 700 18px "Inter", sans-serif;
  background-color: #c99e71;
  padding: 24px 48px;
  text-transform: uppercase;
  text-align: center;

  &: hover {
    background-color: #bd864b;
  }
`;
const ButtonPlay = styled(ButtonCommon)`
  position: relative;
  display: flex;
  align-items: flex-end;
  align-self: flex-end;
  height: 110px;
  text-transform: uppercase;
  font: 400 16px "Inter", sans-serif;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 50%;
    width: 66px;
    height: 66px;
    border: 2px solid #fff;
    border-radius: 50%;
    background: url(/assets/img/play.svg) 50%/14px 18px no-repeat;
    transform: translateX(-50%);
  }

  &:hover {
    color: #c99e71;
  }
`;
