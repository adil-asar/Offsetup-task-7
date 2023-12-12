import React from "react";
import Grid from "@mui/material/Grid";
import login from "../../assets/login.jpg";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Signin = () => {
  return (
    <Grid container sx={{marginTop:'65px'}}>
      <Grid
       item xs={12}
        lg={6}
        sx={{  padding:"25px"}}
        >
<Typography
sx={{
    fontWeight:"400",
    fontSize:'28px',
    color:'rgb(83, 92, 104)',
    fontFamily:'Titillium Web, sans-serif',
    marginBottom:'20px'
}}
 variant="h4">
Sign In
</Typography>
<Typography
sx={{
    fontWeight:"400",
    fontSize:'17px',
    color:'rgb(83, 92, 104)',
    fontFamily:'Titillium Web, sans-serif',
}} 
variant="body1">
Please login to your account
</Typography>

<Box sx={{margin:'20px 0'}}>
<TextField 
fullWidth 
size="small"
sx={{margin:"30px 0"}}
label="Email"
 id="Email" />
<TextField 
fullWidth 
size="small"
label="Password"
 id="Password" />
 <Typography
sx={{
    fontWeight:"400",
    fontSize:'15px',
    color:'#FF9F43',
    fontFamily:'Titillium Web, sans-serif',
    margin:"30px 0"
}} 
variant="body1">
Forgot Password ? 
</Typography>
<Button
 size="large"
sx={{
    width:"100%",
    bgcolor:'#FF9F43',
    fontFamily:'Titillium Web, sans-serif',
    fontWeight:"400",
    fontSize:'15px',
    letterSpacing:'1px',
    textTransform:"capitalize",
    color:"#fff",
    '&:hover': {
        backgroundColor: '#FF9F43', 
      },
}}
 >
    Sign In
</Button>
<Typography
sx={{
    fontWeight:"400",
    fontSize:'16px',
    color:'rgb(83, 92, 104)',
    fontFamily:'Titillium Web, sans-serif',
    margin:'20px 0',
    textAlign:'center'
}} 
variant="body1">
Don’t have an account? Sign Up
</Typography>
</Box>
</Grid>

      {/* image section  */}

      <Grid
        item
        xs={12}
        lg={6}
        sx={{
            display: { xs: 'none', lg: 'block' },
        }}
      >
        <img
          src={login}
          style={{ 
            width: "100%", 
            marginBottom: "-7px",
             height: "90.3vh",
             }}
          alt="login pic"
        />
      </Grid>
    </Grid>
  );
};

export default Signin;
