import { ReactNode } from "react";
import * as S from "./productSection.style"

const ProductSection = ({children}: {children: ReactNode}) => {
    return(
        <S.Section>
            {children}
        </S.Section>
    )
}

export default ProductSection;