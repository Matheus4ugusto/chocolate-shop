import styled from "styled-components";

export const Form = styled.form`
  height: 50%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.brown.primary};
  border-radius: 10px;
`;

export const SubmitButton = styled.button`
    background-color: #fff
`
