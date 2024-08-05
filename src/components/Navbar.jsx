import React from 'react'
import './Navbar.css'

import logo from'../assets/logo.png';
import contactImg from'../assets/contact.png'
import{Link} from 'react-scroll'
const Navbar = () => {
  return (
    <div>
     

     <nav className="navbar">
        <img src={logo} alt="Logo" className='logo'/>
        
        <div className="desktopMenu">
              <Link className="desktopMenuListItem">Home</Link>
              <Link className="desktopMenuListItem">About</Link>
              <Link className="desktopMenuListItem">Protfolio</Link>
              <Link className="desktopMenuListItem">Clients</Link>

        </div>
        <button className="desktopmenuBtn">
            <img src={contactImg} alt=""  className='desktopMenuImg'/> 
            Contact Me
            </button> 

        
    
     </nav>
    </div>
  )
}

export default Navbar