import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple login check
    if (username === "guest" && password === "Test@123") {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <h1>Dashboard</h1>
      </div>
      <div className="right-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email address or phone number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
          <a href="/">Forgotten password?</a>
          <button type="button" className="create-account-button">Create new account</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
