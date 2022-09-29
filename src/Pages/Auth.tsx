import { FC, useState } from "react";
import { Link } from "react-router-dom";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Auth: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

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
      </form>
    </div>
  );
};

export { Auth };
