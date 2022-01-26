import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import "./header.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react';
import { Link } from "react-router-dom";
function Header() {
  const[inputSearch,setInputSearch] = useState("");

  return <div className='header'>
      <div className='header-left'>
      <MenuIcon />
      <Link to="/">   
      <img className="header-logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="You tube image" />
      </Link>   
      </div>
      <div className='header-input'>
      <input value= {inputSearch} onChange={ e =>setInputSearch(e.target.value)}type="text" placeholder='Search'/>
      <Link to={`/search/${inputSearch}`}><SearchIcon className='header-input-button'/></Link>
      </div>
      <div className='header-icons'>
      <VideoCallIcon className='header-icon'/>
      <AppsIcon  className='header-icon' />
      <NotificationsIcon  className='header-icon' />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>

  </div>;
}

export default Header;
