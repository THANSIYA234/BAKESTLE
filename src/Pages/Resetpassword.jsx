import React, { useContext } from 'react'
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from '@tanstack/react-router'
import { FirebaseContext } from '../Contexts/FirebaseContext'
import './Css/Resetpassword.css'

const Resetpassword = () => {
    const [resetEmail,setEmail]= useState("");
    const {auth}=useContext(FirebaseContext);
    const navigate=useNavigate();

    const handleResetPassword=async()=>{
        if(!resetEmail){
          alert("enter your email");
          return;
    
        }
        try{
          await sendPasswordResetEmail(auth,resetEmail)
          alert("password reset link send to your email")
        }
        catch(error){
          console.error("error in reseting password" ,error.message);
          alert (error.message)
          
        }
        
        
    
        }
  return (
    <div className='reset_password'>
      <div className='reset_container'> <h2>Forgot Password?</h2>
        <input
                type="email"
                placeholder="Enter Your Email"
                value={resetEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleResetPassword} className='link'>Send Reset Link</button>

              <button onClick={()=>navigate({to: "/login?mode=login"})} className='backlogin'>Back To Login</button>
      </div>      
    </div>
  )
}

export default Resetpassword