import * as S from "./button.style";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import Link from "next/link";

const Button: React.FC = () => {
  return (
    <>
      <S.Button>
        {localStorage.getItem("isLoged") == "true" ? (
          <>
            <Link href="/profile" style={{ color: "#F2E0C5" }}>
              {" "}
              <S.Div>
                <S.Span>
                  <BiLogOut />
                </S.Span>
                <S.Span>Minha conta</S.Span>{" "}
              </S.Div>
            </Link>
          </>
        ) : (
          <>
            <Link href="/identify" style={{ color: "#F2E0C5" }}>
              {" "}
              <S.Div>
                <S.Span>
                  <BiLogIn />
                </S.Span>
                <S.Span>Identifique-se</S.Span>{" "}
              </S.Div>
            </Link>
          </>
        )}
      </S.Button>
    </>
  );
};

export default Button;
