import React from 'react'
import { useNavigate } from "react-router-dom"
import {useState} from "react"

const Login = () => {
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = (e) =>{
        const payload = {
            email,password
        }
        fetch("https://magnificent-leotard-cow.cyclic.app/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(payload)
        })
        .then((res) =>res.json())
        navigate("/posts")
    }
    return(
    <div>
        <h2>Welcome to the Login</h2>
      <input type="email" placeholder='Input  Email' onChange={(e) => setEmail(e.target.value)}/>
      <input type="number" placeholder='Input Password' onChange = {(e) =>setPassword(e.target.value)}/>
      <input type="button" value="Submit" onSubmit={handleSubmit}/>
    </div>
  )
}

export {Login}
