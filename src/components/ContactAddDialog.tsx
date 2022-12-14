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
  picture: null,
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
  // const handlePictureChange = (files: FileList | null) => {
  //   const inputRef = useRef<HTMLInputElement | null>(null);
  // };
  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.length ? e.target.files[0] : null;
    if(selectedFile){
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = function () {
          setState((prevState) => ({
            ...prevState,
            picture: reader.result,
          }));
      };
      reader.onerror = function (error) {
          console.log('Error: ', error);
      };
    }
  };

  const handleSubmit = () => {
    handleOK(state);
    handleCancel();
  };
  return (
    <Modal show={show} onHide={handleCancel}>
      <Modal.Header>
        <Modal.Title>
          {initialContact ? "Edit Contact" : "Add new contact"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend mr-1">
              <span className="input-group-text" id="Name">
                Name
              </span>
            </div>
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="Name"
              type="text"
              value={state.name}
              onChange={handleNameChange}
              id="Name"
            />
          </div>

          <hr />

          <div className="input-group mb-3">
            <div className="input-group-prepend mr-1">
              <span className="input-group-text" id="Email">
                Email
              </span>
            </div>
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="Email"
              type="email"
              value={state.email}
              onChange={handleEmailChange}
              id="Email"
            />
          </div>

          <hr />

          <div className="input-group mb-3">
            <div className="input-group-prepend mr-1">
              <span className="input-group-text" id="Phone">
                Phone
              </span>
            </div>
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="Phone"
              type="tel"
              value={state.phone}
              onChange={handlePhoneChange}
              id="Phone"
            />
          </div>

          <hr />

          <div className="input-group mb-3">
            <div className="input-group-prepend mr-1">
              <span className="input-group-file" id="Picture"></span>
            </div>
            <input
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="file"
              type="file"
              onChange={handlePictureChange}
              id="Picture"
              multiple
              accept="image/*"
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <div className="Click-btn ">
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactAddDialog;
