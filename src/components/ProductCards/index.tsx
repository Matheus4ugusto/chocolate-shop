import BuyButton from "../BuyButton";
import * as S from "./productBox.style";

export interface iProductCardsProps {
  id: number;
  nome: string;
  image_logo: string;
  path: string;
  preco: string;
}

const ProductCards: React.FC<iProductCardsProps> = ({
  id,
  nome,
  image_logo,
  path,
  preco,
}) => {
  return (
    <S.Section>
      <a href={`store/${id}`}>
        <S.Img src={image_logo} alt={nome} />
      </a>
      <S.DivData>
        <S.Span>{nome}</S.Span>
        <S.Span id="price">{preco}</S.Span>
      </S.DivData>
      <S.DivButton>
      <BuyButton />
      </S.DivButton>
    </S.Section>
  );
};

export default ProductCards;
