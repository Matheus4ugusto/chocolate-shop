import styled from "styled-components";

export const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 998;
`;

export const Aside = styled.aside`
  position: absolute;
  right: 0;
  width: 20%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  @media (max-width: 425px) {
    width: 50%;
  }
`;

export const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 90%;
  position: absolute;
  bottom: 0;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.cream.primary};
`;

export const ProductDiv = styled.div`
  width: 95%;
  height: 10%;
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const DivButton = styled.div`
  color: ${({theme}) => theme.colors.cream.primary};
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border-radius: 10px;
  width: 95% ;
  font-size: 1.5rem;
  text-align: center;
  &:hover{
    transition: all .5s ;
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.brown.tertiary};
  }
`

export const A = styled.a`
color: ${({theme}) => theme.colors.cream.primary};
`
export const Button = styled.button`
color: ${({theme}) => theme.colors.cream.primary};
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border-radius: 10px;
  width: 95% ;
  font-size: 1.5rem;
  text-align: center;
  &:hover{
    transition: all .5s ;
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.colors.brown.tertiary};
  }
`