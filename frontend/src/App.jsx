import React from "react";
import Home from "./components/ui/Home";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Home";
import Login from "./components/ui/components/Login";
import SignUp from "./components/ui/components/SignUp";
import Analytics from "./components/dashboard/Analytics";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/analytics/:shortUrl" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default App;
