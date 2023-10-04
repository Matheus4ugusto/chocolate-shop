import { ReactNode } from "react";
import * as S from "./form.style";
import { useAuth } from "@/contexts/AuthContext";
import { useForm } from "react-hook-form";
import { iSignIn } from "@/types/userAccess";
import { LoginValidation } from "@/validations/userAccess.validation";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = ({ children }: { children: ReactNode }) => {
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
      {children}
      <S.SubmitButton type="submit">Entrar</S.SubmitButton>
    </S.Form>
  );
};

export default Form;
