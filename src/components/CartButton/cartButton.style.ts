import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.cream.primary};
  font-size: 1.5rem;
  z-index: 999;
  margin-right: 1rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
