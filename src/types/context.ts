import { ChangeEvent } from "react";
import { iSignIn, iUser } from "./userAccess";

export interface iAuthContext {
  signIn: (values: iSignIn) => void;
  user: iUser | null;
  isLoged: boolean;
  logOut: () => void;
}

export interface iAsideContext {
  openAside: () => void;
  closeAside: () => void;
  aside: boolean;
}

export interface iSwitchUserDataContext {
  edit: () => void;
  editable: boolean;
  saveEdit: () => void;
  handleNameInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEmailInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  nameInputValue: any;
  emailInputValue: any;
}
