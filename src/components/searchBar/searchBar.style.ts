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
  @media (max-width: 425px) {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
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
  @media (max-width: 1440px) {
    width: 10%;
  }
  @media (max-width: 1024px) {
    width: 16%;
  }
  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 425px) {
    display: none;
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
  @media (max-width: 425px) {
    display: none;
  }
`;

export const MobileSearchButton = styled.button`
  display: none;
  @media (max-width: 425px) {
    display: flex;
    color: ${({ theme }) => theme.colors.cream.primary};
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.brown.secondary};
    height: 100%;
    align-items: center;
    border-top-right-radius: 10px ;
    border-bottom-right-radius: 10px ;
    
  }
`;
