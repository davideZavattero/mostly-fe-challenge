export interface HttpLoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface HttpLoginDataResponse {
  token: string;
}
