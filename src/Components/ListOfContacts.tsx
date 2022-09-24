import { FC, useMemo, useRef, useState } from "react";
import { IContact } from "../domain/IContact";
import ContactItem from "./ContactItem";
import ContactAddDialog from "./ContactAddDialog";

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

  const [open, setOpen] = useState(false);
  const currentContactRef = useRef<IContact>();
  const handleEdit = (contact: IContact) => {
    currentContactRef.current = contact;
    setOpen(true);
  };

  const handleRemove = () => {};
  const handleSubmit = () => {
    console.log("save");
  };
  return (
    <>
      <ContactAddDialog
        show={open}
        initialContact={currentContactRef.current}
        handleCancel={() => setOpen(false)}
        handleOK={handleSubmit}
      />
      {list.map((item) => (
        <ContactItem
          key={item.email}
          contact={item}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
        />
      ))}
    </>
  );
};

export default ListOfContacts;
