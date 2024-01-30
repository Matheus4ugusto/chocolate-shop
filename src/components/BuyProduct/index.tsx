import React, {MouseEventHandler} from "react";
import * as S from "@/app/(public)/product/[id]/page.style";
import {moneyFormat} from "@/utils/moneyFormat";
import BuyButton from "@/components/BuyButton";
import Counter from "@/components/Counter";
import {getProductById} from "@/services/product.service";
import {useCart} from "@/contexts/CartContext";
import {useCounter} from "@/contexts/ProductCounterContext";

const BuyProduct:React.FC<any> = ({id, name, image, price, grammage, description}) => {
    const { buy } = useCart();
    const { amount, increase } = useCounter();
    const handleClick: MouseEventHandler<HTMLButtonElement> = async () => {
        const product = await getProductById(Number(id));
        buy({ ...product, amount: amount });
    };
    return (
        <>
            <S.Section>
                <S.Figure>
                    <S.Img
                        title={name}
                        alt={name}
                        src={`http://127.0.0.1:8000/storage/products/${id}/${image}`}
                        draggable="false"
                    />
                </S.Figure>
                <S.Display>
                    <S.DataSection>
                        <S.H1>{name}</S.H1>
                        <S.P>{moneyFormat(price)}</S.P>
                        <S.Span id="grams">{grammage}</S.Span>
                        <S.P>{description}</S.P>
                    </S.DataSection>
                    <S.Div>
                        <S.DivBuyButton>
                            <BuyButton
                                text="Comprar"
                                variant="cream"
                                fontSize="3rem"
                                onClick={handleClick}
                                id="button"
                            >
                                Comprar
                            </BuyButton>
                        </S.DivBuyButton>
                        <Counter />
                    </S.Div>
                </S.Display>
            </S.Section>
        </>
    );
}

export default BuyProduct;