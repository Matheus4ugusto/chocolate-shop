"use client";

import SideBar from "@/components/Mobile/SideBar";
import ProductCards from "@/components/ProductCards";
import ProductSection from "@/components/ProductSection";
import ProductsBox from "@/components/ProductsBox";
import { ProductProps } from "@/types/productTypes";
import { products } from "@/utils/products";

export default function Home() {
  return (
    <>
      <ProductSection>
        <ProductsBox>
          {products.map((item: ProductProps) => (
            <ProductCards key={item.id} {...item} />
          ))}
        </ProductsBox>
      </ProductSection>
    </>
  );
}