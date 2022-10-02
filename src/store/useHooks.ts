import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const AUTH_KEY = "auth";

// export function logIn(json: string){
//   window.sessionStorage.setItem(AUTH_KEY, json);
// }
// export function logOut(){
//   window.sessionStorage.removeItem(AUTH_KEY);
//   window.location.reload();
// }

export function useAuth() {
  const { isAuth } = useAppSelector((state) => state.users);
  return { isAuth };
}
