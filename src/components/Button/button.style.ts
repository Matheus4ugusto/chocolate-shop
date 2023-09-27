import styled from "styled-components";
import Link from "next/link";

export const Button = styled.button`
  font-size: 1.25rem;
  .text {
    @media (max-width: 1024px) {
      display: none;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
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

export const Span = styled.span`
  display: flex;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonDiv = styled.div`

`
