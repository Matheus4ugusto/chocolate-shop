import { useAuth } from "@/contexts/AuthContext";
import * as S from "./button.style";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import Link from "next/link";

const Button: React.FC = () => {
  const { isLoged, user, logOut } = useAuth();
  return (
    <>
      <S.Button>
        {isLoged ? (
          <>
            <Link href="/profile" style={{color: "#F2E0C5"}}>
              {" "}
              <BiLogIn /> <S.Span>Minha conta</S.Span>{" "}
            </Link>
          </>
        ) : (
          <>
            <Link href="/login" style={{color: "#F2E0C5"}}>
              {" "}
              <BiLogOut /> <S.Span>Identifique-se</S.Span>{" "}
            </Link>
          </>
        )}
      </S.Button>
    </>
  );
};

export default Button;
