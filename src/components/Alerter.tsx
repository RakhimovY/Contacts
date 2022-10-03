import { Alert, AlertTitle, Dialog } from "@mui/material";

interface IAlert {
  alertState: boolean;
  handleAlertClick: () => void;
  title: string;
}

export const Alerter = ({ alertState, handleAlertClick, title }: IAlert) => {
  console.log(alertState);

  return (
    <>
      <Dialog open={alertState} onClose={handleAlertClick}>
        <Alert>
          <AlertTitle>Error</AlertTitle>
          {title}
        </Alert>
      </Dialog>
    </>
  );
};
