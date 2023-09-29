import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 3rem 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Display = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  gap: 3rem;
  @media (max-width: 425px) {
    width: 425px;
    justify-content: unset;
  }
  @media (max-width: 375px) {
    width: 375px;
    justify-content: unset;
  }
  
`;

export const Figure = styled.figure`
  width: 400px;
  height: 440px;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  };
  @media(max-width: 375px){
    transform: scale(0.8)
  }
`;

export const Img = styled.img``;

export const H1 = styled.h1`
  font-size: 2rem;
`;

export const P = styled.p`
  font-size: 1.5rem;
`;

export const DivBuyButton = styled.div`
  width: 500px;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  :hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.brown.tertiary};
    transform: scale(1.01);
  }
  @media (max-width: 425px) {
    display: flex;
    width: 400px;
    margin: auto;
  }
  @media (max-width: 375px) {
    display: flex;
    width: 350px;
  }
`;

export const DataSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 425px) {
    width: 400px ;
    margin-left: 10px;
  }
  @media (max-width: 375px) {
    width: 360px ;
    margin-left: 10px;
  }
`;
