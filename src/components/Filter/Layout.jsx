import React from 'react'
import FruitFilter from './FruitFilter'
import Addcart from './Addcart'
import Grid from '@mui/material/Grid';
const Layout = () => {
  return (
    <Grid container spacing={2} sx={{marginTop:"65px",bgcolor:'rgb(245, 246, 250)'}}>
            <Grid item lg={8} xs={12}>
         <FruitFilter/>
        </Grid>
        <Grid item lg={4}  xs={12}>
        <Addcart/>
        </Grid>
        </Grid>
  )
}

export default Layout
