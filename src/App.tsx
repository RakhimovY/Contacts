import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { AuthPage } from "./Pages/AuthPage";
import ContactsList from "./Pages/ContactsList";
import { NavBar } from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/ContactsList" element={<ContactsList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
