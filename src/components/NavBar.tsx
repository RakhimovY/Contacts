import { useAppDispatch, useAuth } from "../store/useHooks";
import { logoutUser } from "../store/userSlice";

export function NavBar() {
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logoutUser());
  const { isAuth } = useAuth();

  return (
    <>
      <nav className="navbar navbar-expand  -lg navbar-light fixed-top bg navbar-custom-bg-color ">
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
                {isAuth ? (
                  <button className="nav-link" onClick={handleLogout}>
                    Sign out
                  </button>
                ) : (
                  <a className="nav-link" href="/signin">
                    Sign in
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
