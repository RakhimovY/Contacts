import React from "react";
import { MainContacts } from "../ContactsComponents/MainContacts";


export const Home: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-[760px] pt-5 text-light">
        <MainContacts />
      </div>
    </>
  );
};
