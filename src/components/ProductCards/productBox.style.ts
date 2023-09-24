import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 500px;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: relative;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  text-align: center;
`;

export const DivData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  #price {
    position: absolute;
    bottom: 2.5rem;
  }
`;

export const DivButton = styled.div`
  width: 174.82px;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  position: absolute;
  bottom: 0.5rem;
  :hover {
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.brown.tertiary};
    transform: scale(1.01);
  }
`;
