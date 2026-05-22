import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "./firebase"
import { useNavigate } from "react-router-dom"


function Register() {
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()
const handleRegister=async ()=>{

    try{
     const data= await  createUserWithEmailAndPassword(auth,email,password)
     console.log(data);
     navigate("/login");
    }
    catch(error){
        console.log(error);

    }
}

  return (
    <div className='h-screen flex items-center justify-center'>
<div className='card w-25 py-3 px-2'>
    <div className='card-header bg-success text-white'>Register</div>
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
        <button onClick={handleRegister} className='btn btn-success w-100'>Register</button>
    </div>
</div>



    </div>
  )
}

export default Register