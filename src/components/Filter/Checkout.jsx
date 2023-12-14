import React, { useState , useContext } from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductContext from '../../Context/ProductContext';
import Typography from '@mui/material/Typography';

export default function Checkout({ disabled }) {

    const {totalPrice,removeAllItems} = useContext(ProductContext);
  const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    removeAllItems()
  };

  return (
    <React.Fragment>
      <Button
        disabled={disabled}
        onClick={handleClickOpen}
        sx={{
          width: "100%",
          fontWeight: "bold",
          bgcolor: "rgb(108, 92, 231)",
          textTransform: "capitalize",
          fontFamily: '"Titillium Web", sans-serif',
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 15px",
          "&:hover": {
            backgroundColor: "rgb(108, 92, 231)",
          },
        }}
      >
        <p style={{ color: "white", letterSpacing: "2px" }}> Checkout</p>
        <p style={{ color: "white", letterSpacing: "2px" }}>{totalPrice}</p>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
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
        '@media screen and (maxWidth: 425px)': {
          fontSize:'15px',
          },
   }}>
 " 
 we have received your order, will deliver soon
 "
    </Typography >
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center",marginTop:'0px',marginBottom:'20px' }}>
          <Button 
          sx={{bgcolor:'#FF9F43',
          color:"white", textTransform:"capitalize",
          padding:'7px 18px', 
          fontSize:"18px",
          fontFamily:'Titillium Web, sans-serif',
          letterSpacing:'1px',
        cursor:'pointer',
          '&:hover': {
            backgroundColor: '#FF9F43',
            cursor:'pointer',
          },
          '@media screen and (maxWidth: 425px)': {
            fontSize:"15px",
            padding:'4px 8px',
            },
  
        }}
          onClick={handleClose}>OK</Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
