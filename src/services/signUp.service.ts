import { iSignUp } from "@/types/userAccess";

const bancoDeDadosUsuarios: Record<string, iSignUp> = {};

async function registrarUsuario(userData: iSignUp) {
  bancoDeDadosUsuarios[userData.email] = userData;
  return { user: userData };
}

export default registrarUsuario;
