import { IContact } from "../domain/IContact";
import { useState } from "react";
import {
  useDeleteContactsMutation,
  useEditContactsMutation,
} from "../core/API";

interface IContactProps {
  contact: IContact;
}

export function EachContacts({ contact }: IContactProps) {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [data, setData] = useState<IContact>({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    picture: contact.picture,
  });

  const [deleteContact] = useDeleteContactsMutation();
  const [editContact] = useEditContactsMutation();

  const heandlerDeleter = async (id: number) => {
    await deleteContact(id).unwrap();
  };
  const heandlerUpdate = async (data: IContact) => {
    setIsEditable(false);
    await editContact(data).unwrap();
  };
  const heandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <figure className="bg-white h-92 rounded-lg shadow-md p-7 mt-5  text-dark text-center">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={contact.picture}
        alt="userPhoto"
      />
      <figcaption onSubmit={heandleSubmit} className="my-3">
        {isEditable ? (
          <input
            type="text"
            value={data.name}
            className="my-2 text-gray-600 font-bold"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        ) : (
          <p className="text-gray-600 font-bold my-2">{contact.name}</p>
        )}
        {isEditable ? (
          <input
            type="email"
            value={data.email}
            className="my-2 text-gray-600 font-bold"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        ) : (
          <p className="text-gray-600 font-bold my-2">{contact.email}</p>
        )}
        {isEditable ? (
          <input
            value={data.phone}
            className="my-2 text-gray-600 font-bold"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        ) : (
          <p className="text-gray-600 font-bold  my-2">{contact.phone}</p>
        )}

        <div className="Click">
          {isEditable ? (
            <button onClick={() => heandlerUpdate(data)}>Save</button>
          ) : (
            <button onClick={() => setIsEditable(true)}>Change</button>
          )}
          <button onClick={() => heandlerDeleter(contact.id)}>Delete</button>
        </div>
      </figcaption>
    </figure>
  );
}
