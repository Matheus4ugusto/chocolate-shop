import { ReactNode } from "react";
import * as S from "./form.style";
import { useAuth } from "@/contexts/AuthContext";

const Form = ({ children }: { children: ReactNode }) => {
    const {signIn} = useAuth()
  return (<S.Form>
    {children}
    </S.Form>)
};

export default Form;
