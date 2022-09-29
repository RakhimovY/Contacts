import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../Pages/Auth";
import { setUser } from "../Redux/Slice/userSlice";
import { useAppDispatch } from "../Redux/CastomHooks";
import { Link } from "react-router-dom";

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
        push("/contacts");
      })
      .catch((e: Error) => alert(e.message));
  };

  return (
    <>
      <Auth title="Sing Up" handleClick={handleRegister} />
      <div className="text-light">
        Already have an account?{" "}
        <Link to="/SingIn" className="text-light">
          {" "}
          Sing In{" "}
        </Link>
      </div>
    </>
  );
};

export { SignUp };
