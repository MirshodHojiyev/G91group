import { onValue, push, ref, set } from "firebase/database";
import { auth, realDatabase } from "./firebase";
import { useEffect, useState } from "react";
import { useAuthContext } from "./providers/authProviders";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import type { Message } from "./index";

const Chat = () => {
 const navigate=useNavigate();
const [message,setMessage]=useState("");
const [messages,setMessages]=useState<Message[]>([]);
 const { user } = useAuthContext();

if(!user){
   return navigate("/login");
}


const logOut=async()=>{
    try{await signOut(auth);


        navigate("/login");
    }
    catch(error){
        console.log(error);
    }

}

useEffect(()=>{
   const messagesRef = ref(realDatabase, 'messages/');
    
    // onValue - har qanday o'zgarishni darhol sezadi
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const list = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));
        setMessages(list);
        console.log(messages);
      } else {
        setMessages([]);
      }
    });



    return () => unsubscribe(); // Sahifadan chiqib ketganda yakunlash


},[])



const handleSaveMessage = () => {
    const messagesRef = ref(realDatabase, 'messages/');
    const newMessageRef = push(messagesRef); // ID yaratadi
    
    
    set(newMessageRef, {
     message,
     userId:user?.uid
    });
  };




  return (
    <div className="container p-4">
        <button onClick={logOut} className="btn btn-danger">Log out</button>
      <div className="bg-white shadow-md rounded-lg max-w-3xl w-full mx-auto">
        {/* header */}
        <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
          <p className="text-xl font-semibold mb-0">Chat app</p>
          <button data-bs-theme="dark" className="btn btn-close"></button>
        </div>
        {/* messages box */}
        <div className="p-4 h-100 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`${message.userId===user?.uid ? "text-right " : "text-left"} mb-4`}>
                <p className={`${message.userId===user?.uid ? "bg-blue-500" : "bg-gray-200"} text-white rounded-lg py-2 px-4 inline-block`}>
                  {message.message}
                </p>
            </div>
          ))}
        </div>
        {/* send message form */}
        <div className="p-4 border-t flex">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type a message..."
            className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={handleSaveMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;