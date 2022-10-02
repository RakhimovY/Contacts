import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/useHooks";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
  ask: string;
  link: string;
}

const Auth: FC<FormProps> = ({ title, handleClick, ask, link }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const {isAuth} = useAuth();
  useEffect(() => {
    console.log(isAuth)
    if(isAuth) navigate('/contacts');
  }, [isAuth, navigate])

  const data = []
  const handle = (e: any) => {
    e.preventDefault();
    handleClick(email, pass);
  };

  return (
    <div className="login-box">
      <h2>{title}</h2>
      <form onSubmit={handle}>
        <div className="user-box">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {!email && <label>Email</label>}
        </div>

        <div className="user-box">
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          {!pass && <label>Password</label>}
        </div>
        <button onClick={() => handleClick(email, pass)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <p className="pb-1 mb-1">{title}</p>
        </button>

        <div className="text-light pt-5 text-center">
          {ask}{" "}
          <Link className="text-light" to={`/${link}`}>
            {" "}
            {link}{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export { Auth };
