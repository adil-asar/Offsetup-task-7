import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "orange", // Change border color to orange when focused
    },
  },
  
  "& .MuiInputLabel-root.Mui-focused": {
    color: "orange", // Change label color to orange when focused
  },
});

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
        sx={{
          width: "100%",
          border: "3px solid rgb(46, 204, 113)",
          color: "rgb(46, 204, 113)",
          fontWeight: "bold",
          letterSpacing: "2px",
          textTransform: "capitalize",
          fontFamily: '"Titillium Web", sans-serif',
          backgroundColor: "",
          "&:hover": {
            backgroundColor: "rgb(46, 204, 113)",
            border: "3px solid rgb(46, 204, 113)",
            color: "#fff",
          },
          padding: "12px",
        }}
        onClick={handleClickOpen}
      >
        <AddIcon sx={{ marginRight: "10px" }} />
        Add Customer
      </Button>
      <Dialog
        open={open}
        fullWidth
        maxWidth={"md"}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "400",
              fontSize: "23px",
              color: "rgb(45, 52, 54)",
              fontFamily: "Titillium Web, sans-serif",
              "@media screen and (maxWidth: 425px)": {
                fontSize: "21px",
              },
            }}
          >
            Create
          </Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {/* form for adding customer */}
            <Grid container spacing={2}>
              {/* left side  */}
              <Grid item lg={6} xs={12}>
                <CustomTextField
                  sx={{
                    margin: "20px 0",
                    outline:"orange"
                  }}
                  label="Customer Name"
                  fullWidth
                  id="outlined-size-small"
                  size="small"
                />

                <CustomTextField
                  sx={{ margin: "20px 0" }}
                  label="Phone"
                  fullWidth
                  id="outlined-size-small"
                  size="small"
                />

                <CustomTextField
                  sx={{ margin: "20px 0" }}
                  label="City"
                  fullWidth
                  id="outlined-size-small"
                  size="small"
                />
              </Grid>
              {/* right side  */}
              <Grid item lg={6} xs={12}>
                <CustomTextField
                  sx={{ margin: "20px 0" }}
                  label="Email"
                  fullWidth
                  id="outlined-size-small"
                  size="small"
                />

                <CustomTextField
                  sx={{ margin: "20px 0" }}
                  label="Country"
                  fullWidth
                  id="outlined-size-small"
                  size="small"
                />

                <CustomTextField
                  sx={{ margin: "20px 0" }}
                  label="Address"
                  fullWidth
                  id="outlined-size-small"
                  size="small"
                />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "start",
            marginTop: "0px",
            marginBottom: "10px",
          }}
        >
          <Button
            sx={{
              bgcolor: "#FF9F43",
              color: "white",
              textTransform: "capitalize",
              padding: "7px 18px",
              fontSize: "18px",
              fontFamily: "Titillium Web, sans-serif",
              letterSpacing: "1px",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "rgb(211, 84, 0)",
              },
              "@media screen and (maxWidth: 425px)": {
                fontSize: "15px",
                padding: "4px 8px",
              },
            }}
          >
            Submit
          </Button>
          <Button
            sx={{
              bgcolor: "rgb(87, 101, 116)",
              color: "white",
              textTransform: "capitalize",
              padding: "7px 18px",
              fontSize: "18px",
              fontFamily: "Titillium Web, sans-serif",
              letterSpacing: "1px",
              "&:hover": {
                backgroundColor: "rgb(34, 47, 62)",
              },
              "@media screen and (maxWidth: 425px)": {
                fontSize: "15px",
                padding: "4px 8px",
              },
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogForm;
