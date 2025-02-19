import React, { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../Contexts/FirebaseContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import './Css/Loginsignup.css';
import { useNavigate } from "@tanstack/react-router";

const LoginSignup = () => {
  const { auth } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const defaultLoginState = params.get("mode") === "login";
  const [isLogin, setIsLogin] = useState(defaultLoginState);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLogin(defaultLoginState);
  }, [defaultLoginState]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in successfully");
        navigate ("/");
      } 
     
      
      
      else {
        const name = e.target.name.value;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        
        await updateProfile(userCredential.user, {
          displayName: name ||"user",
        });

        console.log("User signed up successfully with name:", name);
      }

      await auth.currentUser.reload();
      navigate({to:"/"});

    }catch (err) {
      if (err.code === "auth/invalid-login-credentials") {
        setError("Incorrect email or password");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Try again later.");
      } else if (err.code === "auth/user-not-found") {
        setError("No account found with this email");
      } else {
        setError("Login failed: " + err.message);
      }
    }
    
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="loginsignup-fields">
          {!isLogin && <input type="text" name="name" placeholder="Your Name" required />}
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        {isLogin && (
          <p className="forgot-password" onClick={() => navigate({ to: "/resetpassword" })} style={{ color: "blue", cursor: "pointer" }}>
            Forgot Password?
          </p>
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
