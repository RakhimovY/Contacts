import { useNavigate } from "react-router-dom";
import { AUTH_KEY, logIn } from "../store/useHooks";
import { usersApi } from "../store/usersApi";
import { Auth } from "./Auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const SignIn = () => {
  const push = useNavigate();
  
  const handleLogin = async(email: string, password: string) => {
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        logIn(JSON.stringify(user))

        push("/contacts");
      })
      .catch((e: Error) => alert(e.message));
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
