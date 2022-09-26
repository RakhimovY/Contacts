import { FC, useMemo, useRef, useState } from "react";
import { IContact } from "../domain/IContact";
import EachContactItem from "./EachContactItem";
import ContactAddDialog from "./ContactAddDialog";
import { useDeleteContactsMutation } from "../core/API";
import DeleteConfirmation from "./Confirm";
import { current } from "@reduxjs/toolkit";

interface Props {
  data: IContact[];
  search: string;
}

const ListOfContacts: FC<Props> = ({ data, search }) => {
  const list = useMemo(() => {
    return data.filter(
      (item) =>
        search === "" ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);
  const [deleteContact] = useDeleteContactsMutation();
  const [openModul, setOpenModul] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const currentContactRef = useRef<IContact>();
  const handleEdit = (contact: IContact) => {
    currentContactRef.current = contact;
    setOpenModul(true);
  };

  const handleTakecontact = (contact: IContact) => {
    currentContactRef.current = contact;
    setOpenConfirmation(true);
  };
  console.log(currentContactRef.current);

  const handleRemove = (contact: IContact) => {
    currentContactRef.current = contact;
    const id = contact.id;
    deleteContact(id).unwrap();
  };
  const handleSubmit = () => {
    console.log("save");
  };

  const handleOpenConfirmation = () => {
    setOpenConfirmation(true);
  };
  const handleCloseConfirmation = () => {
    setOpenConfirmation(false);
  };

  return (
    <>
      <ContactAddDialog
        show={openModul}
        initialContact={currentContactRef.current}
        handleCancel={() => setOpenModul(false)}
        handleOK={handleSubmit}
      />
      {list.map((item) => (
        <EachContactItem
          key={item.email}
          contact={item}
          handleEdit={handleEdit}
          handleOpenConfirmation={handleOpenConfirmation}
          handleTakecontact={handleTakecontact}
        />
      ))}
      <DeleteConfirmation
        open={openConfirmation}
        handleCloseConfirmation={handleCloseConfirmation}
        initialContact={currentContactRef.current}
        handleRemove={handleRemove}
      />
    </>
  );
};

export default ListOfContacts;
