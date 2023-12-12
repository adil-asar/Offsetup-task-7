import React, { useState } from 'react'
import Button from "@mui/material/Button";
import banana from "../../assets/product35.jpg";
import orange from "../../assets/product29.jpg";
import Grid from "@mui/material/Grid";
import shoe1 from "../../assets/product60.jpg";
import snaks1 from "../../assets/product47.jpg";
import Chip from '@mui/material/Chip';
import QrCodeScannerOutlinedIcon from '@mui/icons-material/QrCodeScannerOutlined';
import PaymentsIcon from '@mui/icons-material/Payments';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Box from "@mui/system/Box";
import CardShoping from './CardShoping';
import "./cart.css";
import PauseIcon from '@mui/icons-material/Pause';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';
import PaymentIcon from '@mui/icons-material/Payment';
import Transaction from './Transaction';

const ShoppingCart = () => {

  const shoppingdata = [ 
    { id:'1',name:'Banana',price:'3000',code:'pt001',image:banana},
    { id:'2',name:'Sashimi',price:'3000',code:'pt001',image:snaks1},
    { id:'3',name:'Orange',price:'3000',code:'pt001',image:orange},
    { id:'4',name:'Red Nike',price:'3000',code:'pt001',image:shoe1},
];


  return (
    <Box  sx={{bgcolor:'#fff', marginTop:'20px',borderRadius:'7px', padding: "20px"}}>
  <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center', marginBottom:'20px'}}>
    <p style={{fontSize:'13px', 
    background:'#F6F7F8', 
    padding:'8px 13px',
    borderRadius:'20px',
    fontWeight:"bold",
    letterSpacing:'1px',
    color:': purple'
    }}>Total Items : {shoppingdata.length}</p>
    <p style={{fontSize:'13px',
     fontWeight:"bold",
    letterSpacing:'1px',
  
    }}>Clear All</p>
  </Box>
{/* cart */}
<Box sx={{height:'250px',overflowY:'scroll',padding:'10px'}} >
{/* shoping card item  */}
{
  shoppingdata.map((item) => <CardShoping key={item.id}
   image={item.image} 
   price={item.price} 
   name={item.name}
   code={item.code}
   />)
}

</Box>

{/* pirces And Details */}

<Box sx={{marginTop:'30px',padding:'0px 10px'}}>
  <Box sx={{
    display:'flex', 
  justifyContent:'space-between',
   marginBottom:'15px',
   fontWeight:'bold',
   fontSize:'14px',
    letterSpacing:'1px',
   '@media screen and (max-width: 350px)': {
    fontSize:'13px',
    },
   
   }} >
    <p>SubTotal</p>
     <p>55.00$</p>
  </Box>
  <Box sx={{
    display:'flex',
   justifyContent:'space-between',
    marginBottom:'15px',
    fontSize:'14px',
    fontWeight:'bold',
    letterSpacing:'1px',
    '@media screen and (max-width: 350px)': {
      fontSize:'13px',
      },
    }} >
    <p>Tax</p>
     <p>20.00$</p>
  </Box>
  <Box sx={{display:'flex', 
  justifyContent:'space-between', 
  marginBottom:'15px',
   color:'purple',
   fontSize:'18px',
   fontWeight:'bold',
   letterSpacing:'1px',
   '@media screen and (max-width: 350px)': {
    fontSize:'15px',
    },
   }} >
    <p >Total</p>
     <p>55.00$</p>
  </Box>

<Box></Box>
</Box>

{/* debit and cash */}
<Box 
 sx={{
  width: "100%",
 display:'flex',
 gap:"15px",
 marginTop:'20px',
 flexWrap:'wrap',
justifyContent:'center'
}}>

<Box sx={{
  width:'30%',
  height:"120px",
border:'1px solid rgb(223, 230, 233)',
borderRadius:'7px',
display:"flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",
'@media screen and (max-width: 350px)': {
  width:'45%',
  },
}}>
  <CreditCardIcon fontSize='large'  sx={{color:'rgb(178, 190, 195)'}} />
  <p style={{marginTop:"5px"}}>Cash</p>
</Box>

<Box sx={{
  width:'30%',
height:"120px",
border:'1px solid rgb(223, 230, 233)',
borderRadius:'7px',
display:"flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",
'@media screen and (max-width: 350px)': {
  width:'45%',
  },
}}>
  <PaymentsIcon fontSize='large'  sx={{color:'rgb(178, 190, 195)'}}/>
  <p style={{marginTop:"5px"}}>Debit</p>
</Box>

<Box sx={{
  width:'30%',
  height:"120px",
border:'1px solid rgb(223, 230, 233)',
borderRadius:'7px',
display:"flex",
alignItems:"center",
justifyContent:"center",
flexDirection:"column",
'@media screen and (max-width: 350px)': {
  width:'45%',
  },
}}>
  <QrCodeScannerOutlinedIcon fontSize='large' sx={{color:'rgb(178, 190, 195)'}} />
  <p style={{marginTop:"5px"}}>Scan</p>
</Box>
</Box>
{/* checkout */}
<Box sx={{marginTop:'20px'}}>
  <Button 
  sx={{
    width: "100%",
    fontWeight: "bold",
    bgcolor: "rgb(108, 92, 231)",
    textTransform: "capitalize",
    fontFamily: '"Titillium Web", sans-serif',
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    "&:hover": {
      backgroundColor: "rgb(108, 92, 231)",
      
    },
  }}>
 <p style={{color:'white' ,letterSpacing:"2px",}}> Checkout</p>
  <p style={{color:'white', letterSpacing:"2px",}}>60.00$</p>
</Button>
</Box>
{/* chips */}
<Grid container sx={{marginTop:'20px'}} spacing={2} >

<Grid item md={3} sm={6} xs={12}  >
  <Chip sx={{width:'100%',fontSize:'12px'}}  icon={<PauseIcon fontSize='small' />}  label="Hold" /> </Grid>
<Grid item md={3} sm={6} xs={12}  >
  <Chip sx={{width:'100%',fontSize:'12px'}}  icon={<CreateIcon fontSize='small' />}  label="Quotation" /> </Grid>
<Grid item md={3} sm={6} xs={12}  >
  <Chip sx={{width:'100%',fontSize:'12px'}}  icon={<DeleteOutlineIcon fontSize='small' />}  label="Void" /> </Grid>
<Grid item md={3} sm={6} xs={12}  >
  <Chip sx={{width:'100%',fontSize:'12px'}}  icon={<PaymentIcon fontSize='small' />}  label="Payment" /> </Grid>
<Grid item md={3} sm={6} xs={12}  >   
<Transaction />
</Grid>

</Grid>

              </Box>
  )
}

export default ShoppingCart
