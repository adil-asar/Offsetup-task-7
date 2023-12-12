import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialogsub from './Dialogsub';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Typography from '@mui/material/Typography';

const Dialogbox = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <DeleteOutlineOutlinedIcon
     fontSize='large'
       sx={{color:'#FF9F43',marginRight:'10px',borderRadius:'4px' ,padding:'5px', bgcolor:"#fff"}} onClick={handleClickOpen}>
      Open 
    </DeleteOutlineOutlinedIcon
     >
    <Dialog
      open={open}
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
      '@media screen and (maxWidth: 425px)': {
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
        '@media screen and (maxWidth: 425px)': {
          fontSize:'15px',
          },
   }}>
    You won't be able to revert this!
    </Typography >
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center",marginTop:'0px',marginBottom:'20px' }}>
        {/* submodal */}
        <Dialogsub setOpen={setOpen}/>           
        <Button 
        sx={{bgcolor:'rgb(235, 77, 75)',
        color:"white", textTransform:"capitalize",
        padding:'7px 18px', 
        fontSize:"18px",
        fontFamily:'Titillium Web, sans-serif',
        letterSpacing:'1px',
        '&:hover': {
          backgroundColor: 'rgb(235, 77, 75)', 
        },
        '@media screen and (maxWidth: 425px)': {
          fontSize:"15px",
          padding:'4px 8px',
          },

      }}
        onClick={handleClose} autoFocus>
        Cancel
        </Button>
      </DialogActions>
    </Dialog>
  </>
  
) }

export default Dialogbox
