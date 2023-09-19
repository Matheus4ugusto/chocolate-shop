"use client";

import Link from "next/link";
import SearchBar from "../searchBar";
import * as S from "./header.style";

const Header: React.FC = () => {
  return (
    <>
      <S.Header>
        <Link href="/">
          {" "}
          <S.H1>Chocolate shop</S.H1>
        </Link>
        <S.InputBox>
          <SearchBar />
        </S.InputBox>
      </S.Header>
    </>
  );
};

export default Header;
