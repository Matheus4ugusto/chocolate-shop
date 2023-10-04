import { ReactNode } from "react";
import * as S from "./form.style";
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { iSignIn } from "@/types/userAccess";
import { LoginValidation } from "@/validations/userAccess.validation";
import { yupResolver } from "@hookform/resolvers/yup";

const FormSignIn: React.FC = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSignIn>({
    resolver: yupResolver(LoginValidation),
  });

  return (
    <S.Form onSubmit={handleSubmit(signIn)}>
      <S.Input
        type="email"
        id="emailInput"
        placeholder="Insira o seu Email aqui..."
        {...register("email")}
      />
      <small>{errors?.email?.message}</small>
      <S.Input
        type="password"
        id="passwordInput"
        placeholder="Insira a sua senha aqui..."
        {...register("password")}
      />
      <small>{errors?.password?.message}</small>
      <S.SubmitButton type="submit">Entrar</S.SubmitButton>
    </S.Form>
  );
};

export default FormSignIn;
