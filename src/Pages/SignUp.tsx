import { useNavigate } from "react-router-dom";
import { useAppDispatch} from "../store/useHooks";
import { createUser } from "../store/userSlice";
import { Auth } from "./Auth";

const SignUp = () => {
  const push = useNavigate();
  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password: string) => {
    dispatch(createUser({email, password})).unwrap();
      push("/contacts");
  };

  return (
    <>
      <Auth
        title="Sing Up"
        handleClick={handleRegister}
        ask="Already have an account?"
        link="SingIn"
      />
    </>
  );
};

export { SignUp };

