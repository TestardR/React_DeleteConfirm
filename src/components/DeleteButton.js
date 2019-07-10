import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import DeleteDialog from "./DeleteDialog";

const DeleteButton = () => {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      {open && <DeleteDialog open={open} close={handleClose} />}
    </Fragment>
  );
};

export default DeleteButton;
