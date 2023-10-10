import { useCart } from "@/contexts/CartContext";
import * as S from "./cartButton.style";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CartButton: React.FC = () => {
  const { asideCart, openAsideCart, closeAsideCart } = useCart();
  return (
    <>
      {!asideCart ? (
        <S.Button onClick={openAsideCart}>
          <PiShoppingCartDuotone />
        </S.Button>
      ) : (
        <S.Button onClick={closeAsideCart}>
          <AiOutlineCloseCircle />
        </S.Button>
      )}
    </>
  );
};

export default CartButton;
