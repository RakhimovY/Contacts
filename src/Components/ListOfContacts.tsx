import { FC, useMemo, useRef, useState } from "react";
import { IContact } from "../domain/IContact";
import EachContactItem from "./EachContactItem";
import ContactAddDialog from "./ContactAddDialog";
import {
  useDeleteContactsMutation,
  useEditContactsMutation,
} from "../core/API";
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
  const [editContacts] = useEditContactsMutation();
  const [openModul, setOpenModul] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);

  const currentContactRef = useRef<IContact>();
  const handleEdit = (contact: IContact) => {
    currentContactRef.current = contact;
    setOpenModul(true);
  };

  const handleRemove = () => {
    const id = currentContactRef.current?.id;
    console.log("delete", currentContactRef.current, id);
    deleteContact(id).unwrap();
    setOpenConfirmation(false);
  };

  const handleSubmit = (contact: IContact) => {
    currentContactRef.current = contact;
    editContacts(contact).unwrap();
    setOpenModul(false);
  };
  const closeConfirmDialog = () => setOpenConfirmation(false);
  const onRemove = (contact: IContact) => {
    currentContactRef.current = contact;
    setOpenConfirmation(true);
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
          key={item.id}
          contact={item}
          handleEdit={handleEdit}
          handleRemove={onRemove}
        />
      ))}
      <DeleteConfirmation
        open={openConfirmation}
        onRemove={handleRemove}
        onCancel={closeConfirmDialog}
      />
    </>
  );
};

export default ListOfContacts;
