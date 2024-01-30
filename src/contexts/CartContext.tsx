import {iCartContext} from "@/types/context";
import {createContext, ReactNode, useContext, useState} from "react";
import {useCounter} from "./ProductCounterContext";
import {products} from "@/utils/products";

import {iCartProduct} from "@/types/productTypes";

export const CartContext = createContext<iCartContext>({} as iCartContext);

const CartContextProvider = ({children}: { children: ReactNode }) => {
    const [asideCart, setAsideCart] = useState<boolean>(false);
    const [product, setProduct] = useState<iCartProduct[]>([]);
    const {amount} = useCounter();
    const [total, setTotal] = useState<number>(0);
    const [items, setItems] = useState([]);

    const closeAsideCart = () => {
        setAsideCart(false);
    };

    const buy = (values: any) => {
        let handleBuy = items;
        handleBuy.push(values)
        setItems(handleBuy);
    };

    const getProducts = () => {
        let handleData = [];
        for (let i = 0; i < products.length; i++) {
            const productData = JSON.parse(
                typeof window !== "undefined"
                    ? (localStorage.getItem(`item${i}`) as string)
                    : "{}"
            );
            handleData.push(productData);
        }

        const filteredData = handleData.filter((i) => i !== null);

        return filteredData;
    };

    const totalOfCart = () => {
        let handleData = [];
        for (let i = 0; i < products.length; i++) {
            const productData = JSON.parse(
                typeof window !== "undefined"
                    ? (localStorage.getItem(`item${i}`) as string)
                    : "{}"
            );
            handleData.push(productData);
        }

        const filteredData = handleData.filter((i) => i !== null);

        var sum = 0;

        for (let i = 0; i < filteredData.length; i++) {
            sum += filteredData[i].price * filteredData[i].amount;
        }


        return sum;
    };

    const openAsideCart = () => {
        setAsideCart(true);
    };

    const cancelBuy = () => {
        for (let i = 0; i < 6; i++) {
            localStorage.removeItem(`item${i}`);
        }
    };

    return (
        <CartContext.Provider
            value={{
                openAsideCart,
                closeAsideCart,
                asideCart,
                buy,
                total,
                cancelBuy,
                getProducts,
                totalOfCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

export const useCart = () => useContext(CartContext);
