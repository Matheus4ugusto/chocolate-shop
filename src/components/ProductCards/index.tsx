import { ProductProps } from "@/types/productTypes";
import BuyButton from "../BuyButton";
import * as S from "./productBox.style";
import { moneyFormat } from "@/utils/moneyFormat";

const ProductCards: React.FC<ProductProps> = ({
  id,
  nome,
  image_logo,
  path,
  preco,
}) => {
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
        <BuyButton fontSize="1.1rem" variant="cream">
          Adicionar ao Carrinho
        </BuyButton>
      </S.DivButton>
    </S.Section>
  );
};

export default ProductCards;
