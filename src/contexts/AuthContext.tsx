import { ReactNode, createContext, useContext, useEffect } from "react";
import { iAuthContext } from "./../types/context";
import { useState } from "react";
import { iSignIn, iUser } from "@/types/userAccess";
import { useRouter } from "next/router";
import { login } from "@/services/login.service";

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

      const data = login(values);

      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      setIsLoged(true);
      setTimeout(() => push(""), 1000);
    });
  };

  useEffect(() => {
    const userIsTrue = localStorage.getItem("user");
    userIsTrue && setUser(JSON.parse(userIsTrue));
  }, []);

  const logOut = () => {
    setUser({} as iUser);
    setIsLoged(false);
    localStorage.clear;
  };

  return (
    <AuthContext.Provider value={{ signIn, user, isLoged, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
