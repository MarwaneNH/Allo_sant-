import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default HomePage;
