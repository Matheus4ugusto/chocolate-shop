import styled from "styled-components";

export const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 998;
`;

export const Aside = styled.aside`
  position: absolute;
  right: 0;
  width: 20%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  @media(max-width: 425px){
    width: 50%
  };
`;
