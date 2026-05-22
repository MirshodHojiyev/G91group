import {  GoogleAuthProvider,  signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { auth } from "./firebase"
import { useNavigate } from "react-router-dom"

function Login() {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()
const googleProvider = new GoogleAuthProvider();

// Google bilan kirish 
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/chat");
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    }
  };

  return (
    <div className='h-screen flex items-center justify-center'>
<div className='card w-25 py-3 px-2'>
    <div className='card-header bg-primary text-white'>Login</div>
    <div className='card-body'>
        <input 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='form-control' type="email" placeholder='email' />
        <input 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='form-control mt-2' type="password" placeholder='password' />
    </div>
    <div className='card-footer'>
        <button onClick={handleLogin} className='btn btn-primary w-100'>Login</button>
    </div>
</div>



    </div>
  )
}

export default Login