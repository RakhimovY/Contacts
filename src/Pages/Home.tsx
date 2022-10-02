import React from "react";
import { MainContacts } from "../ContactsComponents/MainContacts";
import { useAuth } from "../Redux/CastomHooks";
import { Route, Routes } from "react-router-dom";
import { SingIn } from "../UserPage/SingInLogic";
import { useGetUserQuery } from "../core/API";

export const Home: React.FC = () => {
  const { isAuth } = useAuth();
  // const isAuth = true;
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
        <Route path="/SingIn" element={<SingIn />} />
      </Routes>
    </div>
  );
};
