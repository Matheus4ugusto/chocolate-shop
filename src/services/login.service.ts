import { iSignIn } from "@/types/userAccess";

export const login = (values: iSignIn) => {
  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);

    return {
      id: user.id || 0,
      name: user.name || " ",
      email: values.email,
    };
  }

  return {
    id: 0,
    name: " ",
    email: values.email,
  };
};
