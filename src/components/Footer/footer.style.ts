import styled from "styled-components";

export const DivFooter = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  color: ${({ theme }) => theme.colors.cream.primary};
  justify-content: space-around;
  @media (max-width: 425px) {
    overflow-x: hidden;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
  }


`;

export const H1 = styled.h1`
  font-size: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
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
