import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/system/Box';
import Dialogbox from './Dialogbox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './cart.css'
const Addcart = () => {
  return (
    <>
      <Grid container>
           <Grid item xs={12} 
           sx={{padding:"20px",
           marginBottom:'20px',
           alignItems:'center',
           display:"flex",
           justifyContent:"space-between",
           flexWrap:'wrap'}}>
            <Box>
            <h2>Order List</h2>
            <p>Transaction id : #65565</p>
            </Box>
            <Box sx={{display:'flex',alignItems:"center"}}>
            <Dialogbox/>
            <MoreHorizIcon fontSize='large' sx={{color:'rgb(149, 165, 166)'}}/>
            </Box>
           </Grid>
      </Grid>
    </>
  )
}

export default Addcart
