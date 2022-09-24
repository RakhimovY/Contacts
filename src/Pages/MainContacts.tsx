import { useCallback, useState } from "react";
import { useGetContactsQuery, useAddContactsMutation } from "../core/API";
import { IContact } from "../domain/IContact";
import { faker } from "@faker-js/faker";
import ListOfContacts from "../Components/ListOfContacts";
import ContactAddDialog from "../Components/ContactAddDialog";

export function ContactsList() {
  const [search, setSearch] = useState<string>("");
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
    []
  );

  const { data = [], isError, isLoading } = useGetContactsQuery(100);
  const [addNewContact] = useAddContactsMutation();

  const handleSubmit = async (contact: IContact) => {
    const img: string = faker.image.abstract(640, 480, true);
    console.log("contact", contact);
    await addNewContact({
      ...contact,
      picture: img,
    }).unwrap();
  };

  const [show, setShow] = useState(false);
  const handleAddContact = () => setShow(true);
  const handleCancel = () => setShow(false);

  return (
    <div className="container mx-auto max-w-[760px] pt-5 text-light ">
      <div className="d-flex">
        <input
          className=" rounded-md p-2 text-dark "
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
        />
        <button className="ml-auto" onClick={handleAddContact}>
          Add new contact
        </button>
      </div>

      <ContactAddDialog
        show={show}
        handleCancel={handleCancel}
        handleOK={handleSubmit}
      />

      <section className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        <ListOfContacts data={data} search={search} />
      </section>
    </div>
  );
}
