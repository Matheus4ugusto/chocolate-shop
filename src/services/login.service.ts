import { iSignIn } from "@/types/userAccess";
import {api} from "@/services/api";

export const login = async (values: iSignIn) => {
  const {data} = await api.post("login", values);

  return data
};
