import React from 'react'
import { Link } from 'react-router-dom'
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import '../style/Navbar.css'

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="logo">
                <h1>Hello<span>Travels</span></h1>
            </div>
            <div className="options">
                <Link to='/aboutus'><InfoIcon id='mui1'/>About Us</Link>
                <Link to='/contactus'><ContactSupportIcon/>Contact Us</Link>
                <Link to='/userlogin'>Login</Link>
            </div>
        </div>
    )
}

export default Navbar