import React from "react";
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";
import LogUp from "./pages/LogUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import QstF from "./pages/QstF";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route index path="/login" element={<LogIn />} />
          <Route index path="/logup" element={<LogUp />} />
          <Route index path="/recherche" element={<Search />} />
          <Route index path="/admin/*" element={<Dashboard />} />
          <Route index path="/about" element={<About />} />
          <Route index path="/question-frequente" element={<QstF />} />
          <Route index path="/contactus" element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
