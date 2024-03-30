import React from 'react'
import {useState} from 'react'
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleMenuClick = () => {
    setShowNavbar(!showNavbar); // Toggle navbar visibility
};

  return (
    <header className="header">

    <a href="#" className="logo"> <span>BE</span>STRONG </a>

    <button className="menubar" onClick={handleMenuClick}>
    {showNavbar ? ( 
        <FontAwesomeIcon icon={faTimes} className='menu-btn'/>  // Cross icon (Import faTimes)
    ) : (
        <FontAwesomeIcon icon={faBars} className='cross-btn'/>  // Menu icon
    )}
</button>

    <nav className={`navbar ${showNavbar ? 'active' : ''}`}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#features">features</a>
        <a href="#pricing">pricing</a>
        <a href="#trainers">trainers</a>
        <a href="#blogs">blogs</a>
    </nav>

</header>
  )
}

export default Header