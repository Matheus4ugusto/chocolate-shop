import { iSignIn } from "@/types/userAccess";

export const login = (values: iSignIn) => {
  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);

    return {
      id: user.id || 0,
      nome: user.name || "usuário teste",
      email: values.email,
    };
  }

  return {
    id: 0,
    nome: "usuário teste",
    email: values.email,
  };
};
