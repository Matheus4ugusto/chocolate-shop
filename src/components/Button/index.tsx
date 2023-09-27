import * as S from "./button.style";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Button: React.FC = () => {

  const {isLoged} = useAuth()
  console.log(isLoged);
  
  return (
    <>
      <S.ButtonDiv>
        { isLoged === true ? (
          <>
            <Link href="/profile" style={{ color: "#F2E0C5" }}>
              {" "}
              <S.Div>
                <S.Span className="icon">
                  <BiLogOut/>
                </S.Span>
                <S.Span className="text"></S.Span>{" "}
              </S.Div>
            </Link>
          </>
        ) : (
          <>
            <Link href="/identify" style={{ color: "#F2E0C5" }}>
              {" "}
              <S.Div>
                <S.Span className="icon">
                  <BiLogIn/>
                </S.Span>
                <S.Span className="text"></S.Span>{" "}
              </S.Div>
            </Link>
          </>
        )}
      </S.ButtonDiv>
    </>
  );
};

export default Button;
