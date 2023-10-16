"use client";
import { useCart } from "@/contexts/CartContext";
import * as S from "./checkout.style";
import { iCartProduct } from "@/types/productTypes";
import { moneyFormat } from "@/utils/moneyFormat";

export default function Checkout() {
  const cart = useCart();
  const cartProducts = cart.getProducts();
  const getTotalOfCart = cart.totalOfCart();

  return (
    <S.Main>
      <S.Div>
        <S.Section>
          {cartProducts.map((products: iCartProduct) => (
            <S.ProductDiv key={products.id}>
              <span>{products.nome}</span>
              <span>
                Preço: {moneyFormat(products.preco * products.amount)}
              </span>
              <span>Qtd.: {products.amount}</span>
            </S.ProductDiv>
          ))}
        </S.Section>
      </S.Div>

      <S.CheckoutSection>
        <span>Total: {moneyFormat(getTotalOfCart)}</span>
      </S.CheckoutSection>
    </S.Main>
  );
}
