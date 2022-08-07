import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

export interface SimpleDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  character: any;
}

const AvatarDialog = ({ open, setOpen, character }: SimpleDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogTitle>{character.name}</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor.
        </Typography>
        <Typography gutterBottom>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={e => setOpen}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AvatarDialog;
