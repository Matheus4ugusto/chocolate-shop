"use client";

import UserDataButton from "@/components/UserDataButton";
import * as S from "./profile.style";
import { useAuth } from "@/contexts/AuthContext";
import { useSwitchUserData } from "@/contexts/SwitchUserDataContext";

export default function Profile() {
  const { user } = useAuth();
  const { editable } = useSwitchUserData();
  return (
    <S.Section>
      <S.Form>
        <label htmlFor="name">Nome de usuário:</label>
        <S.Input
          type="text"
          placeholder={user?.name}
          disabled={editable}
          id="name"
        />
        <label htmlFor="email">Email: </label>
        <S.Input
          type="email"
          placeholder={user?.email}
          disabled={editable}
          id="email"
        />
      </S.Form>
      <UserDataButton />
    </S.Section>
  );
}
