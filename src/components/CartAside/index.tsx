import * as S from "./cartAside.style";
import { useCart } from "@/contexts/CartContext";

const CartAside: React.FC = () => {
  const { aside } = useCart();

  return aside === true &&  (
    <S.Blur>
      <S.Aside>
        <h1>Olá, Mundo!</h1>
      </S.Aside>
    </S.Blur>) ;
};

export default CartAside;
