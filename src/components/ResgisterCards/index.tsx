import Link from "next/link";
import * as S from "./resgisterCards.style";

export interface IRegisterCardsProps {
  title: string;
  text: string;
  buttonContent: string;
  buttonRedirect: "LogIn" | "SignIn";
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
            <Link href={buttonRedirect}>
          <S.Button>{buttonContent}</S.Button>
            </Link>
        </S.DivButton>
      </S.Card>
    </>
  );
};

export default RegisterCards;
