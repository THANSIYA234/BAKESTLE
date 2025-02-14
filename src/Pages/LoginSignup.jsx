import React, { useState, useContext } from "react";
import { useForm } from "@tanstack/react-form";
import "./Css/Loginsignup.css";
import { FirebaseContext } from "../Contexts/FirebaseContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "@tanstack/react-router";


const LoginSignup = () => {
  const { auth } = useContext(FirebaseContext);
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate()
   

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setError("");
      try {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, value.email, value.password);
          console.log("User logged in successfully");
        } else {
          await createUserWithEmailAndPassword(auth, value.email, value.password);
          console.log("User signed up successfully");
        }
      } catch (err) {
        setError(err.message);
      }
    },
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    form.handleSubmit();
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          {!isLogin && (
            <form.Field name="name">
              {(field) => (
                <input
                  type="text"
                  placeholder="Your Name"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              )}
            </form.Field>
          )}
          <form.Field name="email">
            {(field) => (
              <input
                type="email"
                placeholder="Email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>
          <form.Field name="password">
            {(field) => (
              <input
                type="password"
                placeholder="Password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          </form.Field>

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        {isLogin&&(
          <p onClick={()=>navigate ({to:"/Resetpassword"})} className="forget_button">Forget Password?</p>
        )}
        <p className="loginsignup-login">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up here" : "Login here"}
          </span>
         </p>

          
            
          
        
      </div>
    </div>
  );
};

export default LoginSignup;
