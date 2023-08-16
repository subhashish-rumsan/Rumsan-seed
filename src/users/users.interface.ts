export interface LoginCredentials {
  username: string;
  password: string;
}

export interface UserProfile extends LoginCredentials {
  name: string;
  age: number;
  lastLoginDate: Date;
  token?: string;
}
