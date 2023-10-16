import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  height: 30rem;
  width: 80%;
  margin: auto 1rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Section = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center
`;

export const ProductDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  width: 20%;
  height: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.cream.primary};
`;

export const CheckoutSection = styled.section`
  background-color: ${({theme}) => theme.colors.brown.primary};
  border-radius: 10px;
  height: 30rem;
  width: 16%;
  margin-left: 2rem;
  color: ${({theme}) => theme.colors.cream.primary};
  font-size: 2rem;
  padding: 1rem;
  margin: auto 0;
`;

export const Main = styled.main`
  display: flex;
  height: 40rem
`