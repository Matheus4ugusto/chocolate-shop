import * as S from "./resgisterCards.style";

export interface IRegisterCardsProps {
  title: string;
  text: string;
  buttonContent: string;
  buttonRedirect: "SignIn" | "SignUp";
}

const RegisterCards: React.FC<IRegisterCardsProps> = ({
  title,
  text,
  buttonContent,
  buttonRedirect,
}) => {
  return (
    <>
      <S.Card id="card">
        <S.TextSection>
          <S.title>{title}</S.title>
          <S.textBody>{text}</S.textBody>
        </S.TextSection>
        <S.DivButton>
          <S.Div>
            <S.link href={buttonRedirect}>
          {buttonContent}
            </S.link>
          </S.Div>
        </S.DivButton>
      </S.Card>
    </>
  );
};

export default RegisterCards;
