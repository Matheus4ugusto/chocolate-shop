"use client";

import Link from "next/link";
import SearchBar from "../searchBar";
import * as S from "./header.style";
import { useCart } from "@/contexts/CartContext";
import Button from "../Button";
import SideBarButton from "../Mobile/SideBarButton";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Header: React.FC = () => {
  const { openAside, aside, closeAside } = useCart();
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
        {!aside ? (
          <S.Button onClick={openAside}>
            <PiShoppingCartDuotone />
          </S.Button>
        ) : (
          <S.Button onClick={closeAside}>
            <AiOutlineCloseCircle />
          </S.Button>
        )}
        <SideBarButton />
      </S.Header>
    </>
  );
};

export default Header;
