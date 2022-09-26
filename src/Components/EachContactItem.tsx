import { Button } from "@mui/material";
import { FC } from "react";
import { IContact } from "../domain/IContact";
import { useEffect } from "react";

interface Props {
  contact: IContact;
  handleEdit: (contact: IContact) => void;
  handleRemove: (contact: IContact) => void;
}
const EachContactItem: FC<Props> = ({ contact, handleEdit, handleRemove }) => {
  return (
    <>
      <figure className="bg-white h-92 rounded-lg shadow-md p-7 mt-5  text-dark text-center">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={contact.picture}
          alt="userPhoto"
        />
        <figcaption className="my-3">
          <p className="text-gray-600 font-bold my-2">{contact.name}</p>

          <p className="text-gray-600 font-bold my-2">{contact.email}</p>

          <p className="text-gray-600 font-bold  my-2">{contact.phone}</p>

          <div className="Click">
            <button onClick={() => handleEdit(contact)}>Edit</button>
            <Button onClick={() => handleRemove(contact)}>Delete</Button>
          </div>
        </figcaption>
      </figure>
    </>
  );
};

export default EachContactItem;
