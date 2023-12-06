import React from 'react'
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Avatar1 from '../../assets/avatar-02.jpg'
import Avatar2 from '../../assets/avatar-03.jpg'
import Avatar3 from '../../assets/avatar-13.jpg'
import Avatar4 from '../../assets/profile4.jpg'
import './badge.css'
const BadgeMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
    <button style={{border:'none'}} className="menu_icon"
      id="basic-div"
      aria-controls={open ? 'basic-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      onClick={handleClick}
    >
      <Badge  badgeContent={4} color="warning">
         <NotificationsIcon  fontSize="small" 
         className="badge" /></Badge>
    </button>

    <Menu style={{marginTop:'30px', marginLeft:'-220px'}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} style={{width:"350px",display:'flex',justifyContent:"space-between"}}>
           <p>Notification</p>
           <p style={{color:"red"}}>Clear</p>
        </MenuItem>
        <Divider />
        <div className='menu_scroll'>
        <MenuItem onClick={handleClose} 
        style={{width:"350px", display:'flex'}}>
          <img src={Avatar1} style={{width:'50px',marginRight:'10px', height:'50px', borderRadius:'25px'}} alt="" />
          <div >
           <p>John De0 added new task Patient <br/> Appointment Booking</p>
           <small>4 Minutes Ago</small>
          </div>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose} 
        style={{width:"350px", display:'flex'}}>
          <img src={Avatar2} style={{width:'50px',marginRight:'10px', height:'50px', borderRadius:'25px'}} alt="" />
          <div >
           <p>John De0 added new task Patient <br/> Appointment Booking</p>
           <small>4 Minutes Ago</small>
          </div>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose} 
        style={{width:"350px", display:'flex'}}>
          <img src={Avatar3} style={{width:'50px',marginRight:'10px', height:'50px', borderRadius:'25px'}} alt="" />
          <div >
           <p>Misty Tison added John Deo and <br/> Clarel Mel Doctor conferncing <br/> availiable module</p>
           <small>1 Minutes Ago</small>
          </div>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose} 
        style={{width:"350px", display:'flex'}}>
          <img src={Avatar4} style={{width:'50px',marginRight:'10px', height:'50px', borderRadius:'25px'}} alt="" />
          <div >
           <p>Bernados Galaviz added new task  <br/> private chat module</p>
           <small>6 Minutes Ago</small>
          </div>
        </MenuItem>
        </div>
        <Divider/>
        <MenuItem onClick={handleClose} style={{width:"350px",display:'flex',justifyContent:"center"}}>
           <p> View All Notification</p>
           
        </MenuItem>
      </Menu>
  </>
  )
}

export default BadgeMenu ;