import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { NavBar } from "./components/NavBar";
import { SignUp } from "./pages/SignUp";

function App() {
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
