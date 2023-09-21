import * as S from "./productBox.style";

export interface iProductBoxProps {
  id: number;
  nome: string;
  categoria: string;
  image_logo: string;
  nota: number;
  path: string;
  distancia: string;
  tempo: string;
  taxaEntrega: number;
  preco: number;
}

const ProductBox: React.FC<iProductBoxProps> = ({
  id,
  nome,
  categoria,
  image_logo,
  nota,
  path,
  distancia,
  tempo,
  taxaEntrega,
  preco,
}) => {
  return( 
  <S.Section>
    <S.A href={`store/${id}`}>
        <S.Img src={image_logo} alt={nome}/>
    </S.A>
    <S.DivData>
    <S.Span>{nome}</S.Span>
    <S.Span>{preco}</S.Span>
    </S.DivData>
    
  </S.Section>
  );
};

export default ProductBox;
