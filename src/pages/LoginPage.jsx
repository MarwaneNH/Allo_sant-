import React from "react";
import Footer from "../components/Footer";
import LoginContent from "../components/LoginContent";
import LoginHeader from "../components/LoginHeader";
// import NavBar from "../components/NavBar";

function LoginPage() {
  return (
    <div>
      {/* <NavBar /> */}
      <LoginHeader />
      <LoginContent />
      <Footer />
    </div>
  );
}

export default LoginPage;
