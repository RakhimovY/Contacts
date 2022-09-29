export function SingUp() {
  return (
    <div className="login-box">
      <h2>Sing Up</h2>
      <form>
        <div className="user-box">
          <input type="text" />
          <label>Username</label>
        </div>

        <div className="user-box">
          <input type="password" />
          <label>Password</label>
        </div>
        <a href="/SingIn">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Sing up
        </a>
      </form>
    </div>
  );
}
