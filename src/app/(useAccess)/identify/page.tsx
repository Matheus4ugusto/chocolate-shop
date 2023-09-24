"use client";

import BoxRegisterCards from "@/components/BoxRegisterCards";
import RegisterCards from "@/components/ResgisterCards";

export default function Home() {
  return (
    <>
      <BoxRegisterCards>
        <RegisterCards
          title="Já possui uma conta?"
          text="Faça o Login"
          buttonContent="SignIn"
          buttonRedirect="SignIn"
        />
        <RegisterCards
          title="É novo(a) por aqui?"
          text="Crie a sua conta"
          buttonContent="SignUp"
          buttonRedirect="SignUp"
        />
      </BoxRegisterCards>
    </>
  );
}
