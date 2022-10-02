import { IUser } from "../domain/IUser";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const AUTH_KEY = 'auth'

export function saveUserData(json: string){
  window.sessionStorage.setItem(AUTH_KEY, json);
}

export function useAuth() {
  const data = window.sessionStorage.getItem(AUTH_KEY) as any;
  console.log(data)
  return { isAuth: !!data?.email};
}
