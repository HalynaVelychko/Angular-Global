export interface NameModel {
  first: string;
  last: string;
}

export interface UserModel {
  id: number;
  token: string;
  name: NameModel;
  login: string;
  password: string;
}

export interface AuthorModel {
  id: string;
  name: string;
}

export interface UserNameModel extends NameModel {
  id: string;
}

export interface LoginModel {
  login: string;
  password: string;
}
