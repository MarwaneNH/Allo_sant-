import React from "react";
import Footer from "../components/Footer";
import LoginContent from "../components/LoginContent";
import LoginHeader from "../components/LoginHeader";
import Navbar from "../components/Navbar";

function LoginPage() {
  return (
    <div>
      <Navbar />
      <LoginHeader />
      <LoginContent />
      <Footer />
    </div>
  );
}

export default LoginPage;
