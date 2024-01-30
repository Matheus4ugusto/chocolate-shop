import {login} from "@/services/login.service";
import {iAuthContext} from "@/types/context";
import {iSignIn, iSignUp, iUser} from "@/types/userAccess";
import {useRouter} from "next/navigation";
import {createContext, ReactNode, useContext, useEffect, useState,} from "react";
import {registrarUsuario} from "@/services/signUp.service";
import {api} from "@/services/api";

const AuthContext = createContext<iAuthContext>({} as iAuthContext);

const AuthContextProvider = ({children}: { children: ReactNode }) => {
    const [isLoged, setIsLoged] = useState<boolean>(false);
    const [user, setUser] = useState<iUser | null>({} as iUser);
    const {push} = useRouter();

    useEffect(() => {
        setIsLoged(JSON.parse(localStorage.getItem("isLoged") as string));

        api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
            "@token"
        )}`
    }, []);

    const signIn = async (values: iSignIn) => {
        try {
            const data = await login(values);
            setIsLoged(true);
            localStorage.setItem("isLoged", "true");
            localStorage.setItem("@token", data.token);
            api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
            setUser(data.user);
            push("/");
        } catch (error) {
            console.error("Oops, algo deu errado!");
        }
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
        push("/");
    };

    const signUp = async (values: iSignUp) => {
        const response = await registrarUsuario(values);
        setUser(response.user);
        localStorage.setItem("user", JSON.stringify(response.user));
        setIsLoged(true);
        localStorage.setItem("isLoged", "true");
        push("/signIn");
    };

    return (
        <AuthContext.Provider value={{signIn, user, isLoged, logOut, signUp}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);