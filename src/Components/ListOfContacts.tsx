import { FC, useMemo, useRef, useState } from "react";
import { IContact } from "../domain/IContact";
import EachContactItem from "./EachContactItem";
import ContactAddDialog from "./ContactAddDialog";
import { useDeleteContactsMutation } from "../core/API";
import DeleteConfirmation from "./Confirm";

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
  const handleRemove = (id: number) => {
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
          handleRemove={handleRemove}
          handleOpenConfirmation={handleOpenConfirmation}
        />
      ))}
      <DeleteConfirmation
        open={openConfirmation}
        handleCloseConfirmation={handleCloseConfirmation}

      />
    </>
  );
};

export default ListOfContacts;
