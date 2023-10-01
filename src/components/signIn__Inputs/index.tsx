import * as S from "./signIn__Inputs.style";

const SignIn__Inputs: React.FC = () => {
  return (
    <S.Div>
      <S.Input
        type="email"
        id="emailInput"
        placeholder="Insira o seu Email aqui..."
        required
      />
      <S.Input
        type="password"
        id="passwordInput"
        placeholder="Insira a sua senha aqui..."
        required
      />
    </S.Div>
  );
};

export default SignIn__Inputs;
