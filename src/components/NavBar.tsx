import "../css.css";
import { logOut, useAuth } from "../store/useHooks";

export function NavBar() {
  const {isAuth} = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top bg navbar-custom-bg-color ">
        <div className="container">
          <a className="navbar-brand" href="/contacts">
            YR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/contacts">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                {!isAuth ? (
                  <a className="nav-link" href="/signin">
                    Sign in
                  </a>
                ) : (
                  <button className="nav-link" onClick={logOut}>
                    Sign out
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
