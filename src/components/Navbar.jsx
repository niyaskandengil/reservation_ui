import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="logo">
                <h1>Hello<span>Travels</span></h1>
            </div>
            <div className="options">
                <Link to='/aboutus'>About Us</Link>
                <Link to='/contactus'>Contact Us</Link>
                <Link to='/userlogin'>Login</Link>
            </div>
        </div>
    )
}

export default Navbar