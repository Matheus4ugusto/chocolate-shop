import { ReactNode } from "react";
import * as S from "./productsBox.style";

const ProductsBox = ({ children }: { children: ReactNode }) => {
  return <S.Section>{children}</S.Section>;
};

export default ProductsBox;
