"use client";


import React, {useEffect, useState} from "react";
import {getProductById} from "@/services/product.service";
import BuyProduct from "@/components/BuyProduct";


export default function Product({params}: { params: { id: number } }) {
    const [product, setProduct] = useState({} as any);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProductById(params.id);
                setProduct(data);

            } catch (error) {
                console.error("Um erro desconhecido aconteceu", error)
            }
        }
        fetchData();
    }, []);


    return (
        <BuyProduct id={product.id} name={product.name} image={product.image} price={product.price}
                    grammage={product.grammage} description={product.description}/>
    );
}
