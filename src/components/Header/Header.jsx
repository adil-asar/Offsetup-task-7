import React from 'react'
import CropFreeIcon from '@mui/icons-material/CropFree';
import LanguageIcon from '@mui/icons-material/Language';
import Badge from '@mui/material/Badge';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SettingsIcon from '@mui/icons-material/Settings';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './header.css'
import logo from '../../assets/logo.png'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import profilepic from '../../assets/avator1.jpg'

const Header = () => {

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
 
 <div className='header_css'>
<div className='logo-section'>
<img src={logo} alt="logo" />
</div>
<div className="search-section">
   <div className='input_box'>
   <SearchSharpIcon fontSize="small" className='search_icon'/>
    <input type="text" placeholder='Search' />
   </div>
</div>

<div className="menu-section">
 <div className='menu_icon'><LanguageIcon/></div>
 <div  className='menu_icon'><CropFreeIcon /></div>
 <div  className='menu_icon'> <Badge badgeContent={4} >
      <MailIcon color="action" />
    </Badge>
    </div>
    <div  className='menu_icon'> <Badge badgeContent={4}>
      <NotificationsIcon color="action" />
    </Badge>
    </div>
    <div  className='menu_icon'>
      <SettingsIcon/>
    </div>
    {/* profile section */}

    <div className="profile_css">
      <img src={profilepic} alt="" />
      <div className="name">
      <div>
      <p
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       
      >
        John Smigla 
        <KeyboardArrowDownIcon className='profile-icon-css'/>
        <small>Super Admin</small>
      </p>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
        
      </div>
    </div>
</div>

 </div>
      
    </>
  )
}

export default Header
