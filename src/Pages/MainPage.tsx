import React from "react";
import { ContactsList } from "./MainContacts";

export const MainPage: React.FC = () => {
  return (
    <>
      <div className="container mx-auto max-w-[760px] pt-5 text-light">
        <ContactsList />
      </div>
    </>
  );
};
