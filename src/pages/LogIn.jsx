import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
  return (
    <div className="logging-page">

      <div className="logging-container">
        <div className="logging-content">
          <div className="title">
            <p>Enjoy more.</p>
            <h1>Log In</h1>
            <p>Welcome back, please entre your details.</p>
          </div>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              type="password"
              name="password"
              autoComplete="='off"
              placeholder="Password"
            />
            <Link to="/">Forgot password</Link>
            <button
              className="sign-in-btn"
            >
              Sign In
            </button>
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
        <img src="https://images.unsplash.com/photo-1584464373974-258e289c42fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      </div>

    </div>
  );
}

export default LogIn;
