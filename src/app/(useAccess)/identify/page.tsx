"use client";

import BoxRegisterCards from "@/components/BoxRegisterCards";
import RegisterCards from "@/components/ResgisterCards";

export default function Identify() {
  return (
    <>
      <BoxRegisterCards>
        <RegisterCards
          title="Já possui uma conta?"
          text="Faça o Login"
          buttonContent="SignIn"
          buttonRedirect="signIn"
        />
        <RegisterCards
          title="É novo(a) por aqui?"
          text="Crie a sua conta"
          buttonContent="SignUp"
          buttonRedirect="signUp"
        />
      </BoxRegisterCards>
    </>
  );
}
