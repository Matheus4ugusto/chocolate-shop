export interface iSignUp {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iSignIn {
  // name: string;
  email: string;
  password: string;
}

export interface iUser {
  id?: number;
  name: string;
  email: string;
}
