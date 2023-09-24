"use client";

import Link from "next/link";
import * as S from "./headerForIdentify.style";

const HeaderForIdentify: React.FC = () => {
  return (
    <>
      <S.Header>
        <Link href="/">
          {" "}
          <S.H1>Chocolate Shop</S.H1>
        </Link>
      </S.Header>
    </>
  );
};

export default HeaderForIdentify;
