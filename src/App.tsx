import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SingIn } from "./Pages/SingIn";
import { NavBar } from "./ContactsComponents/NavBar";
import { SingUp } from "./Pages/SingUp";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/contacts" element={<Home />} />
          <Route path="/SingIn" element={<SingIn />} />
          <Route path="/SingUp" element={<SingUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
