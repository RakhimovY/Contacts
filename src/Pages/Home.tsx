import React from "react";
import { MainContacts } from "../components/MainContacts";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./SignIn";
import { useAuth } from "../store/useHooks";

export const Home: React.FC = () => {
   const isAuth = useAuth();
  console.log(isAuth);

  //   return (
  //     <div className="container mx-auto max-w-[760px] pt-5 text-light">
  //       <MainContacts />
  //     </div>
  //   );
  // };

  return isAuth ? (
    <div className="container mx-auto max-w-[760px] pt-5 text-light">
      <MainContacts />
    </div>
  ) : (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};
