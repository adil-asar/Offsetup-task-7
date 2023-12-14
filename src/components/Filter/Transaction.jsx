import React from "react";
import Chip from "@mui/material/Chip";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/system/Box";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import TableTransaction from "./TableTransaction";

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
      <Chip
        onClick={handleClickOpen}
        sx={{ width: "100%", fontSize: "12px", '&:hover': {
         border:"1px solid #FF9F43"
        }, }}
        icon={<CreditScoreIcon fontSize="small" />}
        label="Transaction"
      />

      {/* <Button variant="outlined" >
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        fullWidth
        maxWidth={"lg"}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
            fontSize="small"
            onClick={handleClose}
            sx={{
              color: "orange",
              padding: "5px",
              fontSize: "30px",
              borderRadius: "20px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "orange",
                color: "white",
              },
            }}
          />
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box   sx={{marginBottom:'30px'}}>
              <Button
                sx={{
                  bgcolor: "#FF9F43",
                  color: "white",
                  textTransform: "capitalize",
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "16px",
                  padding: "10px 15px",
                  letterSpacing: "1px",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#FF9F43",
                  },
                }}
              >
                Purchase
              </Button>

              <Button
                sx={{
                  bgcolor: "#FF9F43",
                  color: "white",
                  textTransform: "capitalize",
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "16px",
                  padding: "10px 15px",
                  letterSpacing: "1px",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#FF9F43",
                  },
                }}
              >
                Payment
              </Button>

              <Button
                sx={{
                  bgcolor: "#FF9F43",
                  color: "white",
                  textTransform: "capitalize",
                  fontFamily: "Titillium Web, sans-serif",
                  fontSize: "16px",
                  padding: "10px 15px",
                  letterSpacing: "1px",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "#FF9F43",
                  },
                }}
              >
                return
              </Button>
            </Box>
            {/* search bar and operation  */}
            {/* <Box sx={{margin:"40px 0",display:'flex',justifyContent:"space-between",alignItem:'center'}}> */}
            {/* <TextField
          label="Search"
          size="small"
          id="outlined-start-adornment"
          sx={{width:'35%'}}
          InputProps={{
            startAdornment: 
            <InputAdornment position="start">
              <SearchIcon/>
                </InputAdornment>,
          }}
        /> */}
        {/* file generation */}
        {/* <Box>
        <PictureAsPdfIcon sx={{color:'rgb(235, 59, 90)'}} fontSize="large"/>
        <InsertDriveFileIcon  sx={{color:'rgb(38, 222, 129)',marginLeft:'15px'}} fontSize="large"/>
        <LocalPrintshopOutlinedIcon  sx={{color:'rgb(165, 177, 194)',marginLeft:'15px'}} fontSize="large"/>
        </Box> */}
            {/* </Box> */}
          </DialogContentText>
          <TableTransaction/>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default Transaction;
