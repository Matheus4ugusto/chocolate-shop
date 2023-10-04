import * as S from "./formSignUp.style";

const FormSignUp: React.FC = () => {
  return (
    
    <S.Form>
      <S.Input type="text" placeholder="Insira o seu nome aqui..."/>
      <S.Input type="text" placeholder="Insira o seu sobrenome aqui..."/>
      <label htmlFor="date">Insira a data do seu nascimento aqui:</label>
      <S.Input type="date" id="date"/>
      <S.Input type="email" placeholder="Insira o seu email aqui..."/>
      <S.Input type="password" placeholder="Insira a sua senha aqui..."/>
      <S.Input type="password" placeholder="Confirme a sua senha aqui..."/>
      <S.SubmitButton type="submit">Criar conta</S.SubmitButton>
    </S.Form>
    
  );
};

export default FormSignUp;
