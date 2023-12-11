import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const DialogForm = () => {

   

      const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
    <Button
     sx={{width:"100%",
     border: "3px solid rgb(46, 204, 113)",
     color:'rgb(46, 204, 113)',
     fontWeight:'bold',
     letterSpacing:'2px',
     textTransform:'capitalize',
     fontFamily:'"Titillium Web", sans-serif',
     backgroundColor: '',
     '&:hover': {
        backgroundColor: 'rgb(46, 204, 113)', 
        border: "3px solid rgb(46, 204, 113)",
        color:'#fff'
      },
     padding:"12px"}}
      onClick={handleClickOpen}>
        
      Add Customer
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>
  )
}

export default DialogForm
