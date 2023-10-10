import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.cream.primary};
  display: none;
  font-size: 1.5rem;
  position: absolute;
  z-index: 999;
  right: 1rem;
  @media (max-width: 425px) {
    display: flex;
  }
`;
