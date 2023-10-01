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
  return (
    <>
      <S.Section>
        <S.Figure>
          <S.Img
            title={product.name}
            alt={product.name}
            src={product.image_logo}
            draggable="false"
          />
        </S.Figure>
        <S.Display>
          <S.DataSection>
            <S.H1>{product.nome}</S.H1>
            <S.P>{moneyFormat(product.preco)}</S.P>
          </S.DataSection>
          <S.DivBuyButton>
            <BuyButton
              text="Comprar"
              variant="cream"
              fontSize="3rem"
              // onClick={() => {
              //   if (typeof window !== "undefined") {
              //     return localStorage.setItem("isLoged", "true");
              //   } else {
              //     return null;
              //   }
              // }}
            >
              Comprar
            </BuyButton>
          </S.DivBuyButton>
        </S.Display>
      </S.Section>
    </>
  );
}
