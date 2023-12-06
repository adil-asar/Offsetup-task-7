import React from "react";
import CropFreeIcon from "@mui/icons-material/CropFree";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import Divider from '@mui/material/Divider';
import LanguageIcon from "@mui/icons-material/Language";
import Badge from "@mui/material/Badge";
import BadgeMenu from "./BadgeMenu";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from "@mui/icons-material/Mail";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./header.css";
import logo from "../../assets/logo.png";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import profilepic from "../../assets/avator1.jpg";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drop, setdrop] = React.useState(null);
  const open = Boolean(anchorEl);
  const opendrop = Boolean(drop)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handledrop = (event) => {
    setdrop(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClosedrop = () => {
    setdrop(null);
  };
  ;

  return (
    <>
      <div className="header_css">
        <div className="logo-section">
          <img src={logo} alt="logo" />
        </div>
        {/* responsive */}
        <div className="menu_responsive"><FormatAlignLeftIcon  fontSize="large" className="resp_icon"/></div>
        <div className="logo_responsive"> <img src={logo} alt="logo" /></div>

        <div className="dropdown">
      <MoreVertIcon
      style={{color:'#FF9F43'}} className="resp_icon" fontSize="large"
        id="basic-button"
        aria-controls={opendrop ? 'basic-drop' : undefined}
        aria-haspopup="true"
        aria-expanded={opendrop ? 'true' : undefined}
        onClick={handledrop} 
      />
      <Menu style={{marginTop:'20px'}}
        id="basic-drop"
        anchorEl={drop}
        open={opendrop}
        onClose={handleClosedrop}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem style={{width:'200px',marginBottom:'5px'}}  onClick={handleClosedrop}><p>Profile</p></MenuItem>
        <MenuItem style={{width:'200px',marginBottom:'5px'}} onClick={handleClosedrop}><p>Settings</p></MenuItem>
        <MenuItem style={{width:'200px',marginBottom:'5px'}} onClick={handleClosedrop}><p>Logout</p></MenuItem>
      </Menu>
    </div>

        <div className="search-section">
          <div className="input_box">
            <SearchSharpIcon fontSize="small" className="search_icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>

        <div className="menu-section">
          <div className="menu_icon">
            <LanguageIcon  fontSize="small" />
          </div>
          <div className="menu_icon">
            <CropFreeIcon  fontSize="small" />
          </div>
          <div className="menu_icon">
            <Badge badgeContent={4} color="warning" >
              <MailIcon  fontSize="small" className="badge"   />
            </Badge>
          </div>
        
            <BadgeMenu/>
       
          <div className="menu_icon">
            <SettingsIcon  fontSize="small"/>
          </div>
          {/* profile section */}

          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className="profile_css">
              <img src={profilepic} alt="" />
              <div className="name">
                <p>
                  John Smigla <KeyboardArrowDownIcon />
                </p>
                <small>Super Admin</small>
              </div>
            </div>
          </Button>
          <Menu
          style={{marginTop:'20px'}}
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <div className="profile_css" style={{marginLeft:'0px' , marginBottom:"0px"}}>
                <img src={profilepic} style={{borderRadius:"30px"}} alt="" />
                <div className="name"  >
                  <p>
                    John Smigla 
                  </p>
                  <small>Super Admin</small>
                </div>
              </div>
            </MenuItem>
            <Divider/>
            <MenuItem>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText> <p>My Profile</p></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText><p>Settings</p></ListItemText>
        </MenuItem> 
            <Divider/>
            <MenuItem>
          <ListItemIcon>
            <LogoutIcon style={{color:'red'}} fontSize="small" />
          </ListItemIcon>
          <ListItemText><p style={{color:'red'}}>Logout</p></ListItemText>
        </MenuItem>
           
            
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
