import * as S from "./cartAside.style";
import {useCart} from "@/contexts/CartContext";
import {moneyFormat} from "@/utils/moneyFormat";

const CartAside: React.FC = () => {
    const {asideCart, getProducts, cancelBuy, openAsideCart, closeAsideCart} =
        useCart();
    const cart = useCart();
    const cartProducts = cart.getProducts();

    const handleClearCart = () => {
        cancelBuy();
        closeAsideCart();
        setTimeout(() => {
            openAsideCart();
        }, 0.1);
    };

    console.log(cartProducts);

    return (
        asideCart && (
            <S.Blur>
                <S.Aside>
                    <S.Div>
                        {cartProducts.length ? (
                            <>
                                {cartProducts.map((products: any) => (
                                    <S.ProductDiv key={products.id}>
                                        <span>{products.name}</span>
                                        <span>Qtd.: {products.amount}</span>
                                        <span>
                      Preço: {moneyFormat(products.price * products.amount)}
                    </span>
                                    </S.ProductDiv>
                                ))}
                                <S.Button onClick={handleClearCart}>Limpar o carrinho</S.Button>
                                <S.DivButton>
                                    <S.A href="/checkout">Finalizar compra</S.A>
                                </S.DivButton>
                            </>
                        ) : (
                            <h1>O carrinho está vazio!</h1>
                        )}
                    </S.Div>
                </S.Aside>
            </S.Blur>
        )
    );
};

export default CartAside;
