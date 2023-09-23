import styled from "styled-components";
import { iBuyButtonProps } from ".";

export const Button = styled.button<iBuyButtonProps>`
  color: ${({ theme, variant }) =>
    variant == "cream"
      ? theme.colors.cream.primary
      : theme.colors.black.primary};
  width: 100%;
  height: 100%;
  font-size: ${({fontSize}) => fontSize}
`;
