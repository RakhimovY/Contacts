import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./form";
import { setUser } from "../Redux/Slice/userSlice";
import { useAppDispatch } from "../Redux/CastomHooks";

const Login = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        push("/");
      })
      .catch(() => alert("Invalid user!"));
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export { Login };
