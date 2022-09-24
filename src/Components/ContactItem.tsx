import { FC } from "react";
import { IContact } from "../domain/IContact";

interface Props {
  contact: IContact;
  handleEdit: (contact: IContact) => void;
  handleRemove: (contact: IContact) => void;
}
const ContactItem: FC<Props> = ({ contact, handleEdit, handleRemove }) => {
  return (
    <div>
      <p className="text-gray-600 font-bold  my-2">{contact.name}</p>
      <p className="text-gray-600 font-bold  my-2">{contact.email}</p>
      <p className="text-gray-600 font-bold  my-2">{contact.phone}</p>
      <p className="text-gray-600 font-bold  my-2">{contact.phone}</p>
      <button onClick={() => handleEdit(contact)}>Edit</button>
    </div>
  );
};

export default ContactItem;
