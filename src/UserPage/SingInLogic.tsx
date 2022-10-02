import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../Pages/Auth";
import { useEditUserMutation } from "../core/API";
import { Link } from "react-router-dom";

const SingIn = () => {
  const [userEditer] = useEditUserMutation();
  const push = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        userEditer({
          id: 0,
          email: user.email,
          uid: user.uid,
          token: user.refreshToken,
          isAuth: true,
        }).unwrap();

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
