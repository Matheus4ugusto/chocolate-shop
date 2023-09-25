import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border: none;
  width: 60%;
  height: 100%;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.cream.primary};
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  font-size: 1.25rem;
  height: 100%;
  width: 8%;
  border-left: solid 0.1px ${({ theme }) => theme.colors.brown.primary};
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  color: ${({ theme }) => theme.colors.cream.primary};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.brown.tertiary};
  }
  @media (min-width: 1440px){
    width: 10%;
  }
`;

export const SpanIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.cream.primary};
  font-size: 1.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;
