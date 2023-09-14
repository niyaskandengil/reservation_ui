import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/userlogin.css'

const UserLogin = () => {
  return (
    <div className='userlogin'>
      <form action="">
        <br />
        <br />
        <input type="email"  placeholder='Enter the Email' className='input1'/>
        <br /><br />
        <input type="password"  placeholder='Enter the Password' className='input1'/>
        <br /><br />
        <button className='button'>Login</button>
        <br />
        <p>New User? Click here to <Link to='/usersignup'>Register</Link></p>
      </form>
    </div>
  )
}

export default UserLogin