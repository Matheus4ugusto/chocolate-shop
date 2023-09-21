import styled from "styled-components";

export const DivFooter = styled.div`
  display: flex;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  color: ${({ theme }) => theme.colors.cream.primary};
  justify-content: space-around;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  width: 19rem;
`;

export const Description = styled.p`
  width: 19rem;
  text-align: justify;
`;

export const Ul = styled.ul`
li{
    display: flex;
    align-items: center;
    margin-bottom: .5rem;
}
`;
