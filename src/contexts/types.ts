export interface IAuthContext {
  user: IUser | null,
  signIn: (data: IUser) => void,
  logout: () => void
}

export interface IUser {
  email: string
  password: string 
}