export interface iSignUp {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface iSignIn {
  nome?: string;
  email: string;
  password: string;
}

export interface iUser {
  id?: number;
  nome: string;
  email: string;
}
