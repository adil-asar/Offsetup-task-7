import React from "react";
import Grid from "@mui/material/Grid";
import login from "../../assets/login.jpg";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/logo.png'


const Signup = () => {
  return (
    <Grid container sx={{marginTop:'65px',}}>
      <Grid
       item xs={12}
        lg={6}
        sx={{  padding:"25px",height: "90.3vh",overflowY:'scroll'}}
        >
          <img src={logo} style={{width:"150px",marginBottom:'20px'}} alt="logo" />
<Typography
sx={{
    fontWeight:"400",
    fontSize:'28px',
    color:'rgb(83, 92, 104)',
    fontFamily:'Titillium Web, sans-serif',
    marginBottom:'20px'
}}
 variant="h4">
  Create an Account
</Typography>
<Typography
sx={{
    fontWeight:"400",
    fontSize:'17px',
    color:'rgb(83, 92, 104)',
    fontFamily:'Titillium Web, sans-serif',
}} 
variant="body1">
Continue where you left off
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
    marginTop:'30px',
    color:"#fff",
    '&:hover': {
        backgroundColor: '#FF9F43', 
      },
}}
 >
    Sign Up
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
Already a user? Sign In
</Typography>


<Typography
sx={{
    fontWeight:"400",
    fontSize:'16px',
    color:'rgb(83, 92, 104)',
    fontFamily:'Titillium Web, sans-serif',
    textAlign:'center',
    margin:'20px 0',
}} 
variant="body1">
Or sign up with
</Typography>

<Box sx={{margin:'30px 0',display:"flex",justifyContent:"space-between"}}>
<Button size="large" 
sx={{width:'47.5%',border:"1px solid rgb(209, 204, 192)",color:'rgb(83, 92, 104)',  
fontFamily:'Titillium Web, sans-serif', textTransform:"capitalize"}}>
  <GoogleIcon fontSize="small" sx={{marginRight:"15px",color:'rgb(83, 92, 104)'}} />
  Sign Up using google
  </Button>

<Button size="large"
 sx={{width:'47.5%',border:"1px solid rgb(209, 204, 192)",color:'rgb(83, 92, 104)',
  fontFamily:'Titillium Web, sans-serif', textTransform:"capitalize"}}>
     <FacebookIcon fontSize="small" sx={{marginRight:"15px",color:'rgb(83, 92, 104)'}} />
    Sign Up using facebook
    </Button>
</Box>
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
            marginBottom: "-6px",
             height: "90.3vh",
             position:'fixed'
             }}
          alt="login pic"
        />
      </Grid>
    </Grid>
  );
};

export default Signup;

