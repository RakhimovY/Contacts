import { useCallback, useState } from "react";
import {
  useGetContactsQuery,
  useAddContactsMutation,
} from "../store/contactsApi";
import { IContact } from "../domain/IContact";
import ListOfContacts from "./ListOfContacts";
import ContactAddDialog from "./ContactAddDialog";

export function MainContacts() {
  const [search, setSearch] = useState<string>("");
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  const { data } = useGetContactsQuery(100);
  const items = data ?? [];
  const [addNewContact] = useAddContactsMutation();

  const handleSubmit = async (contact: IContact) => {
    console.log("contact", contact);
    await addNewContact(contact).unwrap();
  };

  const [show, setShow] = useState(false);
  const handleAddContact = () => setShow(true);
  const handleCancel = () => setShow(false);

  return (
    <div className="container mx-auto max-w-[760px] pt-5 text-light ">
      <div className="Click">
        <input
          className="h-10 rounded-md px-2 accordiontext-dark "
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />

        <button
          className="ml-auto border border-white"
          onClick={handleAddContact}
        >
          Add new contact
        </button>
      </div>

      <ContactAddDialog
        show={show}
        handleCancel={handleCancel}
        handleOK={handleSubmit}
      />

      <section className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <ListOfContacts data={items} search={search} />
      </section>
    </div>
  );
}
