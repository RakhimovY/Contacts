import { FC, useState } from "react";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Auth: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="login-box">
      <h2>{title}</h2>
      <form>
        <div className="user-box">
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>

        <div className="user-box">
          <input type="password" onChange={(e) => setPass(e.target.value)} />
          <label>Password</label>
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
