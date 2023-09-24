import styled from "styled-components";

export const DivFooter = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  color: ${({ theme }) => theme.colors.cream.primary};
  justify-content: space-around;
`;

export const H1 = styled.h1`
  font-size: 3rem;
`;

export const Description = styled.p`
  width: 19rem;
  text-align: justify;
`;

export const Ul = styled.ul`
  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
`;
