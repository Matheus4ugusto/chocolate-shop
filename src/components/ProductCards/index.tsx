import { ProductProps } from "@/types/productTypes";
import BuyButton from "../BuyButton";
import * as S from "./productBox.style";
import { moneyFormat } from "@/utils/moneyFormat";
import { useCart } from "@/contexts/CartContext";
import { useCounter } from "@/contexts/ProductCounterContext";
import { getProductById } from "@/services/product.service";
import { MouseEventHandler } from "react";

const ProductCards: React.FC<ProductProps> = ({
  id,
  nome,
  image_logo,
  path,
  preco,
}) => {
  const product = getProductById(Number(id));
  const { amount, increase } = useCounter();
  const { buy } = useCart();
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    buy({ ...product, amount: amount });
  };

  return (
    <S.Section>
      <a href={`product/${id}`}>
        <S.Img src={image_logo} alt={nome} draggable="false" />
      </a>
      <S.DivData>
        <S.Span>{nome}</S.Span>
        <S.Span id="price">{moneyFormat(preco)}</S.Span>
      </S.DivData>
      <S.DivButton>
        <BuyButton fontSize="1.1rem" variant="cream" onClick={handleClick}>
          Adicionar ao Carrinho
        </BuyButton>
      </S.DivButton>
    </S.Section>
  );
};

export default ProductCards;
