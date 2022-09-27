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
    handleCancel();
  };
  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>
          {initialContact ? "Edit Contact" : "Add new contact"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name">Name: </label>
          <input
            className="rounded-md text-dark p-2 mx-auto mx-auto w-45 outline  "
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={handleNameChange}
            id="Name"
          />
          <hr />
          <label htmlFor="Email">Email: </label>
          <input
            className="rounded-md text-dark m-2 p-2  w-45 outline"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleEmailChange}
            id="Email"
          />
          <hr />
          <label htmlFor="Phone">Phone: </label>
          <input
            className="rounded-md text-dark mx-auto my-auto p-2 w-45 outline"
            type="tel"
            placeholder="Phone"
            value={state.phone}
            onChange={handlePhoneChange}
            id="Phone"
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
