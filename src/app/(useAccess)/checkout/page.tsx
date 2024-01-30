"use client";
import {useCart} from "@/contexts/CartContext";
import * as S from "./checkout.style";
import {moneyFormat} from "@/utils/moneyFormat";
import {checkout, createOrder} from "@/services/order.service";

export default function Checkout() {
    const cart = useCart();
    const cartProducts = cart.getProducts();
    const getTotalOfCart = cart.totalOfCart();

    const handleFinishPurchase = async () => {
        const order = await createOrder({
            products: cartProducts.map((product: any) => ({
                id: product.id as number,
                quantity: product.amount as number,
            })),
        });
        const checkoutResponse = await checkout(order.id);
        window.open(checkoutResponse.payment_url, "_blank")
        cart.cancelBuy();
    };

    return (
        <S.Main>
            <S.Div>
                <S.Section>
                    {cartProducts.map((products: any) => (
                        <S.ProductDiv key={products.id}>
                            <span>{products.name}</span>
                            <span>
                Preço: {moneyFormat(products.price * products.amount)}
              </span>
                            <span>Qtd.: {products.amount}</span>
                        </S.ProductDiv>
                    ))}
                </S.Section>
            </S.Div>

            <S.CheckoutSection>
                <span>Total: {moneyFormat(getTotalOfCart)}</span>
                <S.Button onClick={handleFinishPurchase}>a</S.Button>
            </S.CheckoutSection>
        </S.Main>
    );
}
