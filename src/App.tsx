
import {  collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./firebase";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Register from "./Register";
import Login from "./Login";
import { AuthProvider } from "./providers/authProviders";






function App() {



  useEffect(()=>{
    
  },[])





const getUser=async()=>{
const querySnapshot = await getDocs(collection(db, "User"));
const users = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
console.log(users);

  
}


  
  return (
    <div>
 <AuthProvider>
     <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
       <Route path="/chat" element={<Chat/>} />
    </Routes>

 </AuthProvider>

    </div>
  )
}

export default App
