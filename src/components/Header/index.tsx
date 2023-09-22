"use client";

import Link from "next/link";
import SearchBar from "../searchBar";
import * as S from "./header.style";
import { useAuth } from "@/contexts/AuthContext";
import Button from "../Button";

const Header: React.FC = () => {
  const { isLoged, user, logOut } = useAuth();
  return (
    <>
      <S.Header>
        <Link href="/">
          {" "}
          <S.H1>Chocolate Shop</S.H1>
        </Link>
        <S.InputBox>
          <SearchBar />
        </S.InputBox>
        <Button />
      </S.Header>
    </>
  );
};

export default Header;
