import { useNavigate } from "react-router-dom";
import { useAppDispatch} from "../store/useHooks";
import { getUser } from "../store/userSlice";
import { Auth } from "./Auth";

export const SignIn = () => {
  const push = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async(email: string, password: string) => {
    await dispatch(getUser({email, password})).unwrap();

    push('/contacts');
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
