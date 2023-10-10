import { useAside } from "@/contexts/AsideContext";
import * as S from "./SideBarButton.style";
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useCart } from "@/contexts/CartContext";

const SideBarButton: React.FC = () => {
  const { openAsideMobile, closeAsideMobile, asideMobile } = useAside();
  const {asideCart, closeAsideCart} = useCart();

  const handleCloseAsides = () => {
    closeAsideCart(),
    closeAsideMobile()
  }

  return (
    <>
      {!asideMobile ? (
        <S.Button onClick={openAsideMobile}>
          <AiOutlineMenu />
        </S.Button>
      ) : (
        <S.Button onClick={asideCart ? handleCloseAsides : closeAsideMobile}>
          <AiOutlineCloseCircle />
        </S.Button>
      )}
    </>
  );
};

export default SideBarButton;
