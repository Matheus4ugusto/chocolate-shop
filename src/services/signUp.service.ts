import { iSignUp } from "@/types/userAccess";
import {api} from "@/services/api";

export const registrarUsuario = async (userData: iSignUp) => {
  const {data} = await api.post("/register", userData);
  return data;
}


