import * as React from "react";
import { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IContact } from "../domain/IContact";

interface Props {
  open: boolean;
  handleCloseConfirmation: () => void;
  initialContact?: IContact;
  handleRemove: (contact: IContact) => void;
}

const DeleteConfirmation: FC<Props> = ({
  open,
  handleCloseConfirmation,
  initialContact,
  handleRemove,
}) => {
  const removeContact = () => {
    if (initialContact) handleRemove(initialContact);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation}>No</Button>
          <Button
            onClick={() => (handleCloseConfirmation(), removeContact())}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteConfirmation;
