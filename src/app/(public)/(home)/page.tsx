"use client";

import ProductCards from "@/components/ProductCards";
import ProductsBox from "@/components/ProductsBox";
import { moneyFormat } from "@/utils/moneyFormat";

export default function Home() {
  return (
    <>
      <ProductsBox>
        <ProductCards
          id={5}
          preco={moneyFormat(30)}
          nome="Chocolate com mix de castanhas e frutas"
          image_logo="/imgs/chocolate-mixed.png"
          path="/"
        />
        <ProductCards
          id={1}
          preco={moneyFormat(30)}
          nome="Chocolate com castanhas"
          image_logo="/imgs/chocolate-with-nuts.png"
          path="/"
        />
        <ProductCards
          id={2}
          preco={moneyFormat(30)}
          nome="Chocolate com laranja"
          image_logo="/imgs/chocolate-with-orange.png"
          path="/"
        />
        <ProductCards
          id={3}
          preco={moneyFormat(30)}
          nome="Chocolate ao leite"
          image_logo="/imgs/chocolate.png"
          path="/"
        />
        <ProductCards
          id={4}
          preco={moneyFormat(30)}
          nome="Chocolate 70% cacau"
          image_logo="/imgs/dark-chocolate.png"
          path="/"
        />
      </ProductsBox>
    </>
  );
}
