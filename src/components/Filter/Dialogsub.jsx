import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ProductContext from '../../Context/ProductContext';

const Dialogsub = ({setOpen,id}) => {
    const [dialog, setdialog] = React.useState(false);
    const { removeItem } = useContext(ProductContext);

    const handleClickOpen = () => {
      setdialog(true);
  
    };

    const handleRemoveSingleItem = () => {
      removeItem(id);
     
    };
  
    const handleClose = () => {
      setdialog(false);
      setOpen(false);
      handleRemoveSingleItem()
    };
  return (
    <React.Fragment>
      <Button
       sx={{bgcolor:'#FF9F43',
       color:"white", textTransform:"capitalize",
       padding:'7px 18px', fontSize:"18px",
       fontFamily:'Titillium Web, sans-serif',
       letterSpacing:'1px',
       '&:hover': {
         backgroundColor: '#FF9F43', 
       },
       '@media screen and (max-width: 425px)': {
        fontSize:"15px",
        padding:'4px 8px',
        },
     }}
      onClick={handleClickOpen}>
        Yes, delete it!
      </Button>
      <Dialog
        open={dialog}
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        <Typography  variant="h2"
       sx={{
        textAlign:"center",
      fontWeight:"400",
      fontSize:'28px',
      color:'rgb(83, 92, 104)',
      fontFamily:'Titillium Web, sans-serif',
      '@media screen and (max-width: 425px)': {
        fontSize:"24px",
        },
      }}>Are you sure?</Typography  >
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <Typography 
        variant="subtitle1"
         sx={{
        textAlign:"center",
        fontFamily:'Titillium Web, sans-serif',
        color:'rgb(83, 92, 104)',
        fontSize:'20px',
        '@media screen and (max-width: 425px)': {
          fontSize:'15px',
          },
   }}>
  Your file has been deleted.
    </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center",marginTop:'0px',marginBottom:'20px' }}>
          <Button
           sx={{
            bgcolor:'rgb(56, 103, 214)',
           color:"white", 
           textTransform:"capitalize",
           padding:'7px 18px', 
           fontSize:"18px",
           fontFamily:'Titillium Web, sans-serif',
           letterSpacing:'1px',
           '&:hover': {
             backgroundColor: 'rgb(56, 103, 214)', 
           },
           '@media screen and (max-width: 425px)': {
            fontSize:"15px",
            padding:'4px 8px',
            },
         }}
           onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default Dialogsub
