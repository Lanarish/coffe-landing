import styled from "styled-components";

export const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 75px;
`;

export const ButtonCommon = styled.button`
  display: block;
  border: none;
  color: inherit;
  font: inherit;
  background-color: transparent;
  transition: 0.4s;
  cursor: pointer;
`;

export const Section = styled.section`
  padding: 0 0 140px;
`;
export const Title = styled.h2`
  font: 600 18px/22px "Urbanist", sans-serif;
  color: #c99e71;
  text-align: center;
  margin: 0 0 12px;
`;
export const Subtitle = styled.h3`
  font: 400 48px/62px "Righteous", cursive;
  text-align: center;
  margin: 0 0 56px;
`;

export const Text = styled.p`
  opacity: 0.8;
  text-transform: capitalize;
`;

export const Input = styled.input`
  color: inherit;
  display: block;
  padding: 16px 20px;
  opacity: 0.8;
  border: none;
  outline: none;
  font: 600 18px/32px "Urbanist", sans-serif;
`;
