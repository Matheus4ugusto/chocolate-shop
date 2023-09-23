"use client";

import * as S from "./page.style";
import { getProductById } from "@/services/product.service";
import { moneyFormat } from "@/utils/moneyFormat";
import BuyButton from "@/components/BuyButton";

export interface iProduct {
  params: {
    id: string;
  };
}

export default function Product({ params: { id } }: iProduct) {
  const product = getProductById(Number(id));
  console.log(product);
  return (
    <>
      <S.Section>
        <S.Figure>
          <S.Img
            title={product.name}
            alt={product.name}
            src={product.image_logo}
          />
        </S.Figure>
        <S.Display>
          <S.H1>{product.nome}</S.H1>
          <S.P>{moneyFormat(product.preco)}</S.P>
          <S.DivBuyButton>
            <BuyButton
              text="Comprar"
              variant="cream"
              fontSize="3rem"
              onClick={() => localStorage.setItem("teste", "funcionou")}
            >
              Comprar
            </BuyButton>
          </S.DivBuyButton>
        </S.Display>
      </S.Section>
    </>
  );
}
