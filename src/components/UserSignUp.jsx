import React, { useState } from 'react'


const UserSignUp = () => {
  const [name, setName] = useState("");
  console.log(name)
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form action="">
        <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Enter Your Name' />
        <br /><br />
        <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter Your Email' />
        <br /><br />
        <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value) }} placeholder='Enter Your Phone Number' />
        <br /><br />
        <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} />
        <br /><br />
        <input type="tel" value={aadhar} onChange={(e) => { setAadhar(e.target.value) }} placeholder='Enter Your Aadhar Number' />
        <br /><br />
        <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Your Password' />
        <br /><br />
      </form>
    </div>
  )
}

export default UserSignUp