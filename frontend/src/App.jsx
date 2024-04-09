import React from "react";
import Home from "./components/ui/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Home";
import Login from "./components/ui/components/Login";
import SignUp from "./components/ui/components/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
