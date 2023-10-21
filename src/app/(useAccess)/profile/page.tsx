"use client";

import UserDataButton from "@/components/UserDataButton";
import * as S from "./profile.style";
import { useAuth } from "@/contexts/AuthContext";
import { useSwitchUserData } from "@/contexts/SwitchUserDataContext";
import { IoExitOutline } from "react-icons/io5";

export default function Profile() {
  const { user, logOut } = useAuth();
  const {
    editable,
    handleEmailInputChange,
    handleNameInputChange,
    nameInputValue,
    emailInputValue,
  } = useSwitchUserData();

  return (
    <S.Section>
      <S.Div>
        <S.Form>
          <label htmlFor="name">Nome de usuário:</label>
          <S.Input
            type="text"
            placeholder={user?.nome}
            disabled={editable}
            id="name"
            value={nameInputValue}
            onChange={handleNameInputChange}
            required
          />
          <label htmlFor="email">Email: </label>
          <S.Input
            type="email"
            placeholder={user?.email}
            disabled={editable}
            id="email"
            value={emailInputValue}
            onChange={handleEmailInputChange}
            required
          />
        </S.Form>
        <UserDataButton />
        <S.Button onClick={logOut}>
          {" "}
          <IoExitOutline /> Sair
        </S.Button>
      </S.Div>
    </S.Section>
  );
}
