import styled from "styled-components";

export const SpanText = styled.span`
  display: flex;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SpanIcon = styled.span`
  display: flex;
  @media (max-width: 1024px) {
    position: absolute;
    right: 2rem;
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    position: absolute;
    right: 1rem;
    font-size: 2rem;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  @media (max-width: 1440px) {
    font-size: 1rem;
  }
`;

export const ButtonDiv = styled.div`
  @media (max-width: 425px) {
    display: none;
  }
`;
