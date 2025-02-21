import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import WelcomePage from "./Pages/WelcomePage";
import HomePage from "./Pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<HomePage />} />
        {/* 404 Page Not Found Route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;