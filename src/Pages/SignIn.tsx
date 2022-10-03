import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/useHooks";
import { getUser } from "../store/userSlice";
import { Auth } from "./Auth";

export const SignIn = () => {
  const push = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogin = async (email: string, password: string) => {
    try {
      await dispatch(getUser({ email, password })).unwrap();
      push("/contacts");
    } catch (e) {
      const typedError = e as Error;
      alert(typedError.message);
    }
  };

  return (
    <>
      <Auth
        title="Sign In"
        handleClick={handleLogin}
        ask="Don't have an account?"
        link="SignUp"
      />
    </>
  );
};
