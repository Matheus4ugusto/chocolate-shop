import * as S from "./button.style";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Button: React.FC = () => {
  const { isLoged } = useAuth();


  return (
    <>
      <S.ButtonDiv>
        {isLoged === true ? (
          <>
            <Link href="/profile" style={{ color: "#F2E0C5" }}>
              {" "}
              <S.Div>
                <S.SpanIcon className="icon">
                  <BiLogOut />
                </S.SpanIcon>
                <S.SpanText className="text">Minha conta</S.SpanText>{" "}
              </S.Div>
            </Link>
          </>
        ) : (
          <>
            <Link href="/identify" style={{ color: "#F2E0C5" }}>
              {" "}
              <S.Div>
                <S.SpanIcon className="icon">
                  <BiLogIn />
                </S.SpanIcon>
                <S.SpanText className="text">Identifique-se</S.SpanText>{" "}
              </S.Div>
            </Link>
          </>
        )}
      </S.ButtonDiv>
    </>
  );
};

export default Button;
