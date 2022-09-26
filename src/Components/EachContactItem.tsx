import { Button } from "@mui/material";
import { FC } from "react";
import { IContact } from "../domain/IContact";

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
          className="w-45 h-45 rounded-full mx-auto"
          src={contact.picture}
          alt="userPhoto"
        />
        <figcaption className="my-3">
          <p className="text-gray-600 font-bold my-2">{contact.name}</p>

          <p className="text-gray-600 my-2">
            <span className="font-bold">Email: </span>
            {contact.email}
          </p>

          <p className="text-gray-600 my-2">
            <span className="font-bold">Phone: </span>
            {contact.phone}
          </p>

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
