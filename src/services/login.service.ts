import { iSignIn } from "@/types/userAccess";

export const login = (values: iSignIn) => {
  return {
    id: 0,
    name: "usuário teste",
    email: values.email,
  };
};
