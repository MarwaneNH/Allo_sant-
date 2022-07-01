import React from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogIn from "./pages/LogIn";
import LogUp from "./pages/LogUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/registration" element={<LoginPage />} />
          <Route index path="/login" element={<LogIn />} />
          <Route index path="/logup" element={<LogUp />} />
          <Route index path="/recherche" element={<Search />} />
          <Route index path="/admin/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
