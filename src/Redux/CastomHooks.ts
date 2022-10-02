import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../core/index";
import { useGetUserQuery } from "../core/API";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAuth() {
  const { data = [] } = useGetUserQuery(5);
  if (data[0]) {
    const { email, token, uid, isAuth } = data[0];
    return {
      isAuth,
      email,
      token,
      uid,
    };
  }
}
