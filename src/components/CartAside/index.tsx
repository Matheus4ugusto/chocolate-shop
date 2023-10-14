import { iCartProduct } from "@/types/productTypes";
import * as S from "./cartAside.style";
import { useCart } from "@/contexts/CartContext";
import { products } from "./../../utils/products";
import Image from "next/image";
import { transform } from "typescript";
import { moneyFormat } from "@/utils/moneyFormat";

const CartAside: React.FC = () => {
  const { asideCart, getProducts, cancelBuy, openAsideCart, closeAsideCart } =
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
    asideCart === true && (
      <S.Blur>
        <S.Aside>
          <S.Div>
            {cartProducts.map((products: iCartProduct) => (
              <S.ProductDiv key={products.id}>
                <span>{products.nome}</span>
                <span>Qtd.: {products.amount}</span>
                <span>
                  Preço: {moneyFormat(products.preco * products.amount)}
                </span>
              </S.ProductDiv>
            ))}
            {cartProducts.length !== 0 ? (
              <>
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
