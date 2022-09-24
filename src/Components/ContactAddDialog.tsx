import { FC, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { IContact } from "../domain/IContact";

interface Props {
  show: boolean;
  initialContact?: IContact;
  handleOK: (contact: IContact) => void;
  handleCancel: () => void;
}

const defaultContact: IContact = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  picture: "",
};

const ContactAddDialog: FC<Props> = ({
  show,
  initialContact,
  handleOK,
  handleCancel,
}) => {
  const [state, setState] = useState<IContact>(
    initialContact ?? defaultContact
  );
  console.log(state);
  useEffect(() => {
    if (initialContact) setState(initialContact);
  }, [initialContact]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, name: e.target.value }));
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, email: e.target.value }));
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, phone: e.target.value }));
  };

  const handleSubmit = () => {
    handleOK(state);
  };
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>
          {initialContact ? "Edit contact" : "Add new contact"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <input
            className="rounded-md text-dark mx-3 p-2 my-5 w-45 "
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={handleNameChange}
          />
          <input
            className="rounded-md text-dark mx-3 p-2 my-5 w-45 "
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleEmailChange}
          />
          <input
            className="rounded-md text-dark mx-3 p-2 my-5 w-45 "
            type="tel"
            placeholder="Phone"
            value={state.phone}
            onChange={handlePhoneChange}
          />
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactAddDialog;
