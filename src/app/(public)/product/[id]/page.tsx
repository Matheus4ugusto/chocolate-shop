"use client";

import * as S from "./page.style";
import { getProductById } from "@/services/product.service";
import { moneyFormat } from "@/utils/moneyFormat";
import BuyButton from "@/components/BuyButton";
import { useCounter } from "@/contexts/ProductCounterContext";
import Counter from "@/components/Counter";

export interface iProduct {
  params: {
    id: string;
  };
}

export default function Product({ params: { id } }: iProduct) {
  const product = getProductById(Number(id));
  const { amount, increase } = useCounter();
  console.log(amount);
  
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
              onClick={ increase }
            >
              Comprar
            </BuyButton>
            <Counter/>
          </S.DivBuyButton>
        </S.Display>
      </S.Section>
    </>
  );
}
