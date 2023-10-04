import styled from "styled-components";


export const Form = styled.form`
  height: 85%;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  border-radius: 10px;

  label{
    color: ${({ theme }) => theme.colors.cream.primary};
    margin-right: 12rem;
  };
`;

export const Input = styled.input`
background-color: ${({ theme }) => theme.colors.brown.secondary};
  border: none;
  height: 8%;
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
      bottom: .7rem;
    }
    transition: all 1s;
    transform: scale(1.01);
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border-radius: 10px;
  width: 30%;
  color: ${({ theme }) => theme.colors.cream.primary};
  &:hover {
    transition: all 1s;
    background-color: ${({ theme }) => theme.colors.brown.tertiary};
    transform: scale(1.01);
  }
`;

