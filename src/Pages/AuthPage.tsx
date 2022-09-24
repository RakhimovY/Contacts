export function AuthPage() {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" />
          <label>Username</label>
        </div>

        <div className="user-box">
          <input type="password" />
          <label>Password</label>
        </div>
        <a href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
  );
}
