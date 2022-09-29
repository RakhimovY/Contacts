export function SingIn() {
  return (
    <div className="login-box">
      <h2>Sing In</h2>
      <form>
        <div className="user-box">
          <input type="text" />
          <label>Username</label>
        </div>

        <div className="user-box">
          <input type="password" />
          <label>Password</label>
        </div>
        <a href="/SingUp">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sing in
        </a>
      </form>
    </div>
  );
}
