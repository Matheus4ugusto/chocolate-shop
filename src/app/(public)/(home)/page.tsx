"use client";

import React, {useEffect, useState} from "react";
import ProductCards from "@/components/ProductCards";
import ProductSection from "@/components/ProductSection";
import ProductsBox from "@/components/ProductsBox";
import {useCounter} from "@/contexts/ProductCounterContext";
import {ProductProps} from "@/types/productTypes";
import {getProducts} from "@/services/product.service";

export default function Home() {
    const {setAmount} = useCounter();
    useEffect(() => {
        setAmount(1);
    });
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data.data);
            } catch (error) {
                console.error("Um erro desconhecido aconteceu", error)
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <ProductSection>
                <ProductsBox>
                    {products?.map((item: ProductProps) => (
                        <ProductCards key={item.id} {...item} />
                    ))}
                </ProductsBox>
            </ProductSection>
        </>
    );
}
