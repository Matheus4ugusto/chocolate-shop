import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 998;
`;

export const Section = styled.section`
  position: fixed;
  z-index: 999;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  color: ${({ theme }) => theme.colors.cream.primary};
`;
