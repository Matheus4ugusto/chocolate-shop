import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.brown.primary};
  display: flex;
  min-height: 8rem;
  align-items: center;
  gap: 2rem;
`;

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.cream.primary};
  font-size: 3rem;
  margin: 0 2rem;
`;
