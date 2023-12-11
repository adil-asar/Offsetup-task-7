import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Dialogbox from "./Dialogbox";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./cart.css";
import DialogForm from "./DialogForm";
import FormSelect from "./FormSelect";
import Button from "@mui/material/Button";
import QrCodeOutlinedIcon from "@mui/icons-material/QrCodeOutlined";
import ShoppingCart from "./ShoppingCart";

const Addcart = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sx={{
            padding: "20px",
            marginBottom: "0px",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <h2>Order List</h2>
            <p>Transaction id : #65565</p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Dialogbox />
            <MoreHorizIcon
              fontSize="large"
              sx={{ color: "rgb(149, 165, 166)" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ padding: "20px" }}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "7px", padding: "20px",textAlign:'right' }}>
            {/* form dialog  */}
            <DialogForm />
            {/* select */}
            <FormSelect
              name="Chris Moris"
              val1="Walk In Cutomer"
              val2="Chris Moris"
            />
            <FormSelect name="Product" val1=" Product " val2=" Bar code" />
            {/* barcode btn */}
            <Button
              variant="contained"
              sx={{
                marginTop: "20px",
                // marginLeft: "210px",
                width: "50%",
                fontWeight: "bold",
                bgcolor: "rgb(108, 92, 231)",
                letterSpacing: "2px",
                textTransform: "capitalize",
                fontFamily: '"Titillium Web", sans-serif',
                "&:hover": {
                  backgroundColor: "#FF9F43",
                  color: "#fff",
                },
                padding: "12px",
              }}
            
            >
              <QrCodeOutlinedIcon sx={{ marginRight: "10px" }} /> Scan Bar Code
            </Button>
          </Box>
          {/* shopping cart  */}

          <ShoppingCart />
          
        </Grid>
      </Grid>
    </>
  );
};

export default Addcart;
