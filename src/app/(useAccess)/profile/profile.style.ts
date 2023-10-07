import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.brown.primary};
  color: ${({ theme }) => theme.colors.cream.primary};
  width: 80%;
  height: 30rem;
  display: flex;
  margin: auto;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  padding-left: 1rem;
  background-color: ${({ theme }) => theme.colors.brown.secondary};
  outline: none;
  border: none;
  border-radius: 10px;
  width: 15rem;
`;
