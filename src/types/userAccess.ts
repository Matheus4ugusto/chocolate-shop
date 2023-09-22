export interface iSignUp {
  name: string;
  surname: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface iSignIn {
  email: string;
  password: string;
}

export interface iUser {
  id: number;
  name: string;
  email: string;
}
