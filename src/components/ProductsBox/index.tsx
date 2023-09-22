import { ReactNode } from "react";
import * as S from "./productsBox.style";

const ProductsBox = ({ children }: { children: ReactNode }) => {
  return <S.Div>{children}</S.Div>;
};

export default ProductsBox;
