import styled from "styled-components";

export interface iBuyButtonProps {
  variant?: "cream" | "black";
  text?: string;
  fontSize?: string;
}

const BuyButton= styled.button<iBuyButtonProps>`
  color: ${({ theme, variant }) =>
    variant == "cream"
      ? theme.colors.cream.primary
      : theme.colors.black.primary};
  width: 100%;
  height: 100%;
  font-size: ${({ fontSize }) => fontSize};
`;

export default BuyButton;
