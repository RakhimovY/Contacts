import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "../store/useHooks";
import { Auth } from "./Auth";

const SignUp = () => {
  const push = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        saveUserData(JSON.stringify(user))
        push("/contacts");
      })
      .catch((e: Error) => alert(e.message));
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

