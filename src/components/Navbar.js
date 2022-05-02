import React, { useState } from 'react';
import Logo from '../assets/pizzaLogo.png';
import {Link} from  'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false)

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }

  return (
    <div className="navbar">
        <div className='leftSide' id={openLinks ? "open": "close"}>
            <img src={Logo} />
            <div className='hiddenLinks'>
            <Link to='/'>HOME</Link>
            <Link to='/menu'>MENU</Link>
            <Link to='/about'>ABOUT</Link>
            <Link to='/contact'>CONTACT</Link>
            </div>
        </div>
        <div className='rightSide'>
          <Link to='/'>HOME</Link>
          <Link to='/menu'>MENU</Link>
          <Link to='/about'>ABOUT</Link>
          <Link to='/contact'>CONTACT</Link>
          <button onClick = {toggleNavbar}>
          <ReorderIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar