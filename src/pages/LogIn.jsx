import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function LogIn() {
  return (
    <div className="logging-page">
      <Navbar />

      <div className="logging-container">
        <div className="logging-content">
          <div className="title">
            <p>Enjoy more.</p>
            <h1>Log In</h1>
            <p>Welcome back, please entre your details.</p>
          </div>
          <form>
            <input type="email" name="email" placeholder="Your Email" />
            <input
              type="password"
              name="password"
              autoComplete="='off"
              placeholder="Password"
            />
            <Link to="/">Forgot password</Link>
            <button className="sign-in-btn">Sign In</button>
            {/* <button className="google-sign-in-btn">
              <img src="../icons/google.png" alt="" height="20px" /> Sign In
              whit Google
            </button> */}
            <p>
              Don't have an account? <Link to="/logup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>

      <div className="loggin-bg">
        <div className="gradient"></div>
        <img
          src="../img/log-doc-img.avif"
          alt=""
        />
      </div>
    </div>
  );
}

export default LogIn;
