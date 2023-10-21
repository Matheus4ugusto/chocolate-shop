import { useAuth } from "@/contexts/AuthContext";
import * as S from "./formSignUp.style";
import { useRef } from "react";

const FormSignUp: React.FC = () => {
  const { signUp,  } = useAuth();

  const handleNome = useRef<HTMLInputElement>(null);
  const handleEmail = useRef<HTMLInputElement>(null);
  const handleSenha = useRef<HTMLInputElement>(null);
  const handleConfirmarSenha = useRef<HTMLInputElement>(null);
  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();

    const nome = handleNome.current?.value || "";
    const email = handleEmail.current?.value || "";
    const senha = handleSenha.current?.value || "";
    const confirmacaoSenha = handleConfirmarSenha.current?.value || "";

    signUp({ nome, email, senha, confirmacaoSenha });
  };

  return (
    <S.Form onSubmit={handleSignUp}>
      <S.Input
        type="text"
        placeholder="Insira o seu nome aqui..."
        ref={handleNome}
        required
      />
      <S.Input
        type="email"
        placeholder="Insira o seu email aqui..."
        ref={handleEmail}
        required
      />
      <S.Input
        type="password"
        placeholder="Insira a sua senha aqui..."
        ref={handleSenha}
        required
      />
      <S.Input
        type="password"
        placeholder="Confirme a sua senha aqui..."
        ref={handleConfirmarSenha}
        required
      />
      <S.SubmitButton type="submit">Criar conta</S.SubmitButton>
    </S.Form>
  );
};

export default FormSignUp;