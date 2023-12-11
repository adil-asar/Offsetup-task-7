import React from 'react'
import Chip from '@mui/material/Chip';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ClearIcon from '@mui/icons-material/Clear';
const Transaction = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
     <Chip onClick={handleClickOpen} sx={{width:'100%',fontSize:'12px'}}  
     icon={<CreditScoreIcon fontSize='small' />}
       label="Transaction" /> 

{/* <Button variant="outlined" >
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        fullWidth
        maxWidth={'lg'}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title"
         sx={{
            display:'flex',
         justifyContent:"space-between",
         alignItems:'center'
         }}>
        <Typography
            variant="h2"
            sx={{
              fontWeight: "400",
              fontSize: "23px",
              color: "rgb(45, 52, 54)",
              fontFamily: "Titillium Web, sans-serif",
              "@media screen and (max-width: 425px)": {
                fontSize: "21px",
              },
            }}
          >
            Create
          </Typography>
          <ClearIcon 
          fontSize='small' 
          onClick={handleClose}
          sx={{
            color:'orange', 
            padding:'5px',
            fontSize:"30px",
            borderRadius:"20px",
            cursor:'pointer',
            '&:hover': {
                backgroundColor: 'orange', 
                color:"white"
              },
            }} />
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            <br/>
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>

    </>
  )
}

export default Transaction
