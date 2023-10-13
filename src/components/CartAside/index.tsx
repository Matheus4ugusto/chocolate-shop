import { iCartProduct } from "@/types/productTypes";
import * as S from "./cartAside.style";
import { useCart } from "@/contexts/CartContext";
import { products } from './../../utils/products';

const CartAside: React.FC = () => {
  const { asideCart, getProducts } = useCart();
  const cart = useCart();

  const cartProducts = cart.getProducts();


  console.log(cartProducts);

  return (
    asideCart === true && (
      <S.Blur>
        <S.Aside>
        {cartProducts.map((products: iCartProduct) => (
          <div key={products.id}>
            <h1>{products.nome}</h1>
          </div>
          ))}
        </S.Aside>
      </S.Blur>
    )
  );
};

export default CartAside;
