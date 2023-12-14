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
          
        </Grid>
        <Grid item xs={12} sx={{ padding: "20px" }}>
          <Box sx={{ bgcolor: "#fff", borderRadius: "7px", padding: "20px",textAlign:'right' }}>
            {/* select */}
            <FormSelect
              name="Chris Moris"
              val1="Walk In Cutomer"
              val2="Chris Moris"
            />
            <FormSelect name="Product" val1=" Product " val2=" Bar code" />
         
       
          </Box>
          {/* shopping cart  */}

          <ShoppingCart />
          
        </Grid>
      </Grid>
    </>
  );
};

export default Addcart;
