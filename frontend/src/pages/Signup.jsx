import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [age, setAge] = useState("")
    const handleSubmit = (e) =>{
        const payload = {
            email,password, age
        }
        fetch("https://magnificent-leotard-cow.cyclic.app/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(payload)
        })
        .then((res) =>res.json())
        navigate("/posts")
    }
  return (
    <div>
      <h2>Welcome to the Signup Page</h2>
      <input type="text" placeholder='Input Name' onChange={(e) =>setEmail(e.target.value)}/>
      <input type="text" placeholder='Input Email' onChange={(e) =>setEmail(e.target.value)}/>
      <input type="text" placeholder='Type your Password'onChange={(e) =>setPassword(e.target.value)}/>
      <input type="Number" placeholder=' your Age Here'onChange={(e) =>setPassword(e.target.value)}/>
      <select>
        <option>--Gender--</option>
        <option>Male</option>
        <option>Female</option>
      </select>
      <input type="button" value="Submit" onSubmit={handleSubmit}/>
    </div>
  )
}

export  {Signup}
