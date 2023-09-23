import styled from "styled-components";


export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 3rem 3rem;
`

export const Img =styled.img`
  
`

export const Display = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`

export const Figure = styled.figure`
  width: 200px;
  height: 450px;
`;

export const H1 = styled.h1`
  font-size: 2rem;
`;

export const P = styled.p`
font-size: 1.5rem;
`

export const DivBuyButton = styled.div`
background-color: ${({theme}) => theme.colors.brown.primary};
:hover{
  background-color: ${({theme}) => theme.colors.brown.tertiary};
}
`
