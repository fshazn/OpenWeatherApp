import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";


function Login() {
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  

  const handleLogin = (e) => {
    e.preventDefault();
    
    const hardcodedUsername = "demoUser";
    const hardcodedPassword = "demoPassword";

    if (username === hardcodedUsername && password === hardcodedPassword) {
      
      alert("Login successful");
      localStorage.setItem("User", username);
      localStorage.setItem("Password", password);
      navigation("/Dashboard");
    } else {
     
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="left-container">
        {/* <img
          src={image}
          alt="Login Image"
          className="login-image"
        /> */}
        <div className="text-overlay">
          <h2>Open Weather</h2>
          <p>Your Personal Weather Companion for Informed Adventures</p>
        </div>
      </div>

      <div className="login-form">
        <h2>Welcome Back,</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <p className="error-message">{errorMessage}</p> */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
