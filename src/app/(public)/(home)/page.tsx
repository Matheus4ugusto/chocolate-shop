"use client";

import React, { useEffect } from "react";
import SideBar from "@/components/Mobile/SideBar";
import ProductCards from "@/components/ProductCards";
import ProductSection from "@/components/ProductSection";
import ProductsBox from "@/components/ProductsBox";
import { useCounter } from "@/contexts/ProductCounterContext";
import { ProductProps } from "@/types/productTypes";
import { products } from "@/utils/products";



export default function Home() {

  const {amount, decrease, increase, setAmount} = useCounter();
  useEffect(() => {
    setAmount(1);
  });
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
