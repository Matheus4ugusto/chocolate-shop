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

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 425px) {
    width: 60%;
  }
  @media (max-width: 375px) {
    width: 70%;
  }

  label {
    color: ${({ theme }) => theme.colors.cream.primary};
    margin-right: 12rem;
    @media (max-width: 1440px) {
      margin-right: 5.5rem;
    }
    @media (max-width: 1024px) {
      margin-right: 0.5rem;
    }
    @media (max-width: 768px) {
      width: 80%;
      margin-left: 1.3rem;
    }
  }
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  border: none;
  height: 8%;
  width: 80%;
  border-radius: 10px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.cream.primary};
  padding-left: 0.5rem;
  &::placeholder {
    transition: all 1s;
    position: absolute;
    bottom: 2px;
    color: ${({ theme }) => theme.colors.cream.primary};
  }
  &:focus {
    &::placeholder {
      transition: all 1s;
      bottom: 0.7rem;
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
  @media (max-width: 1440px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 55%;
  }
  @media (max-width: 425px) {
    width: 70%;
  }
`;
