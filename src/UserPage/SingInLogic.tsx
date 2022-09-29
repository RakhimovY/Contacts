import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../Pages/Auth";
import { setUser } from "../Redux/Slice/userSlice";
import { useAppDispatch } from "../Redux/CastomHooks";
import { Link } from "react-router-dom";

const SingIn = () => {
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
        push("/contacts");
      })
      .catch((e: Error) => alert(e.message));
  };

  return (
    <>
      <Auth title="Sign In" handleClick={handleLogin} />
      <div className="underLoginBox text-light">
        Don’t have an account?{" "}
        <Link className="text-light" to="/SingUp">
          {" "}
          Sing Up now{" "}
        </Link>
      </div>
    </>
  );
};

export { SingIn };
