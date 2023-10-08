"use client";

import * as S from "./page.style";
import { getProductById } from "@/services/product.service";
import { moneyFormat } from "@/utils/moneyFormat";
import BuyButton from "@/components/BuyButton";
import { useCounter } from "@/contexts/ProductCounterContext";
import Counter from "@/components/Counter";
import { useCart } from "@/contexts/CartContext";
import { MouseEventHandler } from "react";

export interface iProduct {
  params: {
    id: string;
  };
}

export default function Product({ params: { id } }: iProduct) {
  const product = getProductById(Number(id));
  const { amount, increase } = useCounter();
  const { buy } = useCart();
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    buy(product);
  };

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
          <S.Div>
            <S.DivBuyButton>
              <BuyButton
                text="Comprar"
                variant="cream"
                fontSize="3rem"
                onClick={handleClick}
                id="button"
              >
                Comprar
              </BuyButton>
            </S.DivBuyButton>
            <Counter />
          </S.Div>
        </S.Display>
      </S.Section>
    </>
  );
}
