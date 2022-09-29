import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../Pages/Auth";
import { setUser } from "../Redux/Slice/userSlice";
import { useAppDispatch } from "../Redux/CastomHooks";

const SignUp = () => {
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert("Error"));
  };

  return <Auth title="Sing Up" handleClick={handleRegister} />;
};

export { SignUp };
