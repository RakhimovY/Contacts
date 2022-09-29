import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SingIn } from "./UserPage/SingInLogic";
import { NavBar } from "./ContactsComponents/NavBar";
import { SignUp } from "./UserPage/SingUpLogic";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/contacts/*" element={<Home />} />
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/SingUp" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
