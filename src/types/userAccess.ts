export interface iSignUp {
  nome: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
}

export interface iSignIn {
  nome: string;
  email: string;
  password: string;
}

export interface iUser {
  id?: number;
  nome: string;
  email: string;
}
