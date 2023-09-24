import { ReactNode } from "react";
import * as S from "./boxRegisterCards.style";

const BoxRegisterCards = ({ children }: { children: ReactNode }) => {
  return <S.Section>{children}</S.Section>;
};

export default BoxRegisterCards;
