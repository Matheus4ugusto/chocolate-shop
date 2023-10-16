import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { iSignIn, iUser } from "./userAccess";
import { iCartProduct } from "./productTypes";

export interface iAuthContext {
  signIn: (values: iSignIn) => void;
  user: iUser | null;
  isLoged: boolean;
  logOut: () => void;
}

export interface iAsideContext {
  openAsideMobile: () => void;
  closeAsideMobile: () => void;
  asideMobile: boolean;
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

export interface iCartContext {
  openAsideCart: () => void;
  closeAsideCart: () => void;
  asideCart: boolean;
  buy: (values: iCartProduct) => void;
  cancelBuy: () => void;
  total: number;
  getProducts: Function;
  totalOfCart: Function;
}

export interface iProductCounterContext {
  increase: () => void;
  decrease: () => void;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
}
