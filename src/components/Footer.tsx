import React from "react";
import { Container, Input, Section } from "../styles/styles";
import styled from "styled-components";

const Footer = () => {
  const links = ["Home", "Reservation", "Menu"];
  return (
    <SectionFooter>
      <Container>
        <FooterBlock>
          <Logo src="/assets/img/logo.svg" />
          <FooterList>
            {links.map((link, index) => {
              return (
                <FooterLink key={index}>
                  <FooterItem>{link}</FooterItem>
                </FooterLink>
              );
            })}
          </FooterList>
          <FooterForm>
            <FooterInput type="email" placeholder="Enter your email" />
            <FooterButton>
              <Img src="/assets/img/arrow-right.png" />
            </FooterButton>
          </FooterForm>
        </FooterBlock>
      </Container>
      <FooterCopyright>e-Tennis © 2021. All rights reserved.</FooterCopyright>
    </SectionFooter>
  );
};
const FooterBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 5px;
  align-items: center;
`;
const Logo = styled.img`
  width: 72px;
  height: 60px;
  margin: 0 36px 0;
`;
const FooterLink = styled.a``;
const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  list-style-type: none;
  font-size: 20px;
`;
const FooterItem = styled.li`
  list-style-type: none;
  &:hover {
    color: #c99e71;
  }
`;
const FooterForm = styled.form`
  position: relative;
  width: 328px;
  margin: 0 auto;
`;
const FooterInput = styled(Input)`
  width: 100%;
  padding: 22px 70px 22px 28px;
  border-radius: 36px;
  background-color: #1c1814;
`;
const Img = styled.img`
  width: 60px;
  height: 60px;
  background-color: #c99e71;
  padding: 22px;
  border-radius: 50%;
`;
const FooterButton = styled.button`
  position: absolute;
  height: 60px;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  border-radius: 50%;
  border: none;
`;
const FooterCopyright = styled.p`
  display: flex;
  justify-content: center;
  background-color: #1c1814;
  margin: 72px 0 0;
  padding: 32px 0;
`;

const SectionFooter = styled(Section)`
  padding: 0;
`;
export default Footer;
