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
      <h2>Sing In</h2>
      <form>
        <div className="user-box">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          <label>Username</label>
        </div>

        <div className="user-box">
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
          />
          <label>Password</label>
        </div>
        <a onClick={() => handleClick(email, pass)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {title}
        </a>
      </form>
    </div>
  );
};

export { Auth };
