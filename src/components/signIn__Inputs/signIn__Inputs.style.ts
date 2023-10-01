import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border: none;
  height: 20%;
  width: 80%;
  border-radius: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.cream.primary};
  padding-left: .5rem ;
  &::placeholder {
    transition: all 1s;
    position: absolute;
    bottom: 2px;
    color: ${({ theme }) => theme.colors.cream.primary};
  }
  &:focus {
    &::placeholder {
      transition: all 1s;
      bottom: 1rem;
    }
    transition: all 1s;
    transform: scale(1.01);
    outline: none;
  }
`;
