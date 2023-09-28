import styled from "styled-components";
import Link from "next/link";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 25rem;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  color: ${({ theme }) => theme.colors.cream.primary};
  align-items: center;
  gap: 4rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const TextSection = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const title = styled.h1`
  font-size: 1.5rem;
`;

export const textBody = styled.p`
  font-size: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  color: ${({ theme }) => theme.colors.cream.primary};
`;

export const DivButton = styled.div`
  width: 6rem;
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border-radius: 10px;
  text-align: center;
  :hover {
    transition: all 0.5s;
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.brown.tertiary};
  }
`;

export const Div = styled.div`
  border-radius: 10px;
`;

export const link = styled(Link)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.cream.primary};
`;
