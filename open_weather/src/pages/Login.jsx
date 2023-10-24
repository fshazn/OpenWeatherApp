import React, { useState } from 'react';
import './login.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Hardcoded username and password for demonstration purposes
    const hardcodedUsername = 'demoUser';
    const hardcodedPassword = 'demoPassword';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <div className="login-container">
      <div className='left-container'>
      {/* <img
          src={image}
          alt="Login Image"
          className="login-image"
        /> */}
        <div className="text-overlay">
          <h2>Open Weather</h2>
        </div>
      </div>
     
      <div className="login-form">
        <h2>Welcome Back</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
