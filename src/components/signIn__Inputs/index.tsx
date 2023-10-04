import { useAuth } from "@/contexts/AuthContext";
import { iSignIn } from "@/types/userAccess";
import { LoginValidation } from "@/validations/userAccess.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as S from "./signIn__Inputs.style";

const SignIn__Inputs: React.FC = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iSignIn>({
    resolver: yupResolver(LoginValidation),
  });

  return (
<>
      <S.Input
        type="email"
        id="emailInput"
        placeholder="Insira o seu Email aqui..."
        required
        {...register("email")}
      />
      <small>{errors?.email?.message}</small>
      <S.Input
        type="password"
        id="passwordInput"
        placeholder="Insira a sua senha aqui..."
        required
      />
      <small>{errors?.password?.message}</small>
</>
  );
};

export default SignIn__Inputs;
