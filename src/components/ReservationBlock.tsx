import React from "react";
import {
  ButtonCommon,
  Container,
  Input,
  Section,
  Subtitle,
  Title,
} from "../styles/styles";
import styled from "styled-components";

const ReservationBlock = () => {
  return (
    <Section>
      <Container>
        <ReservationWrap>
          <ReservationMap></ReservationMap>
          <ReservationForm>
            <ReservationTitle>Reservation</ReservationTitle>
            <Subtitle>Booking a table</Subtitle>
            <ReservationInput type="text" value="4 Person" />
            <ReservationInput type="text" value="12.25.2020" />
            <ReservationInput type="text" value="11:00 AM" />
            <ReservationBtn>BOOK TABLE</ReservationBtn>
          </ReservationForm>
        </ReservationWrap>
      </Container>
    </Section>
  );
};

const ReservationWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ReservationMap = styled.div`
  width: 50%;
  background: url(/assets/img/map.jpg) 50% 0% / cover no-repeat;
`;

const ReservationTitle = styled(Title)``;
const ReservationForm = styled.form`
  width: 50%;
  padding: 72px 48px;
  background-color: #1c1814;
`;
const ReservationInput = styled(Input)`
  background-color: #14110e;
  width: 100%;
  margin: 0 0 24px;
`;

const ReservationBtn = styled(ButtonCommon)`
  width: 205px;
  margin: 56px auto 0;
  background-color: #c99e71;
  color: white;
  padding: 20px 36px;
`;

export default ReservationBlock;
