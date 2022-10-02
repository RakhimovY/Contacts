import { IUser } from "./../domain/IUser";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../core/index";
import { useGetUserQuery } from "../core/API";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const i: IUser[] = [
  {
    id: 0,
    email: "",
    uid: "",
    token: "",
    isAuth: true,
  },
];

export function useAuth() {
  const { data = [] ?? i } = useGetUserQuery(1);

  const { email, token, uid, isAuth } = data[0];
  return {
    isAuth,
    email,
    token,
    uid,
  };
}
