import BuyButton from "../BuyButton";
import * as S from "./productBox.style";
import {moneyFormat} from "@/utils/moneyFormat";
import {useCart} from "@/contexts/CartContext";
import {useCounter} from "@/contexts/ProductCounterContext";
import {getProductById} from "@/services/product.service";
import {MouseEventHandler} from "react";

const ProductCards: React.FC<any> = ({
                                         id,
                                         name,
                                         image,
                                         path,
                                         price,
                                     }) => {
    const {amount, increase} = useCounter();
    const {buy} = useCart();
    const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
        const product = await getProductById(Number(id));

        buy({...product, amount: amount});
    };

    return (
        <S.Section>
            <a href={`product/${id}`}>
                <S.Img src={`http://127.0.0.1:8000/storage/products/${id}/${image}`} alt={name} draggable="false"/>
            </a>
            <S.DivData>
                <S.Span>{name}</S.Span>
                <S.Span id="price">{moneyFormat(price)}</S.Span>
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
