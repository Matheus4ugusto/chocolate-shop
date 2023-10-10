"use client";

import Link from "next/link";
import SearchBar from "../searchBar";
import * as S from "./header.style";
import { useCart } from "@/contexts/CartContext";
import Button from "../Button";
import SideBarButton from "../Mobile/SideBarButton";
import { PiShoppingCartDuotone } from "react-icons/pi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import CartButton from "../CartButton";

const Header: React.FC = () => {
  const { openAsideCart, asideCart, closeAsideCart } = useCart();
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
    <CartButton/>
        <SideBarButton />
      </S.Header>
    </>
  );
};

export default Header;
