import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./style.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";
import { NavBar } from "./components/NavBar";
import { SignUp } from "./Pages/SignUp";
import { AUTH_KEY, useAppDispatch } from "./store/useHooks";
import { loginUser } from "./store/userSlice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const json = window.sessionStorage.getItem(AUTH_KEY);
    if (json) {
      dispatch(loginUser(JSON.parse(json)));
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/contacts/*" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
