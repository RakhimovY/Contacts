import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../core/index";
import { useGetUserQuery } from "../core/API";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAuth() {
  const { data = [] } = useGetUserQuery(5);
  const { email, token, id, isAuth } = data[0];
  return {
    isAuth,
    email,
    token,
    id,
  };
}
