import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./index";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const AUTH_KEY = "auth";


export function useAuth() {
  const { isAuth } = useAppSelector((state) => state.users);
  return { isAuth };
}
