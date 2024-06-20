import React, { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="app">
      {isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />}
    </div>
  );
};

export default App;
