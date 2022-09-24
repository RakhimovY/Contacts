import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./css.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { AuthPage } from "./Pages/AuthPage";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/contacts" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
