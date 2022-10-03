import { useState } from "react";
import { useAppDispatch, useAuth } from "../store/useHooks";
import { logoutUser } from "../store/userSlice";
import { Alerter } from "./Alerter";

export function NavBar() {
  const dispatch = useAppDispatch();
  const handleLogout = () => dispatch(logoutUser());
  const { isAuth } = useAuth();

  const [alertState, setAlertState] = useState(false);

  const handleAlertClick = () => {
    setAlertState((state) => !state);
  };

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
                <a
                  className="nav-link"
                  href="/contacts"
                  onClick={!isAuth ? handleAlertClick : () => {}}
                >
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
      <Alerter
        alertState={alertState}
        handleAlertClick={handleAlertClick}
        title={""}
      />
    </>
  );
}
