"use client";

import ProductCards from "@/components/ProductCards";
import ProductsBox from "@/components/ProductsBox";
import { ProductProps } from "@/types/productTypes";
import { products } from "@/utils/products";

export default function Home() {
  return (
    <>
      <ProductsBox>
        {products.map((item: ProductProps) => (
          <ProductCards key={item.id} {...item} />
        ))}
      </ProductsBox>
    </>
  );
}
