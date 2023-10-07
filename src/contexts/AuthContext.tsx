import { login } from "@/services/login.service";
import { iAuthContext } from "@/types/context";
import { iSignIn, iSignUp, iUser } from "@/types/userAccess";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoged, setIsLoged] = useState<boolean>(false);
  const [user, setUser] = useState<iUser | null>({} as iUser);
  const { push } = useRouter();

  useEffect(() => {
    setIsLoged(JSON.parse(localStorage.getItem("isLoged") as string));
  }, []);

  const signIn = (values: iSignIn) => {
    return new Promise((resolve) => {
      resolve(true);

      localStorage.setItem("isLoged", "true");

      const response = login(values);

      setUser(response);
      localStorage.setItem("user", JSON.stringify(response));
      setIsLoged(true);
      setTimeout(() => push("/"), 4000);
    });
  };

  useEffect(() => {
    const hasUser = localStorage.getItem("user");
    if (hasUser) {
      setUser(JSON.parse(hasUser));
    }
  }, []);

  const logOut = () => {
    setUser({} as iUser);
    setIsLoged(false);
    localStorage.setItem("isLoged", "false");
    localStorage.setItem("user", "{}");
    push("/")
  };

  const signUp = (values: iSignUp) => {};

  return (
    <AuthContext.Provider value={{ signIn, user, isLoged, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
