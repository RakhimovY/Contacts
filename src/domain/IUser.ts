export interface IUser {
  id: number;
  email: string | null;
  uid: string | null;
  token: string | null;
  isAuth: boolean;
}
