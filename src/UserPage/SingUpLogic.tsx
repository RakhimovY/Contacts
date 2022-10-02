import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../Pages/Auth";
import { useEditUserMutation } from "../core/API";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [userEditer] = useEditUserMutation();
  const push = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
