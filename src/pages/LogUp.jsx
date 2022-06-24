import React from "react";
import { Link } from "react-router-dom";

function LogUp() {
  return (
    <div className="logging-page">

      <div className="logging-container">
        <div className="logging-content">
          <div className="title">
            <p>Enjoy more.</p>
            <h1>Create new account.</h1>
            <p>
              Already a membre? <Link to="/login">Log In</Link>
            </p>
          </div>
          <form>
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <input type="tele" name="phone" placeholder="Phone" />
            <input
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
            />
            <input
              type="password"
              name="passwordC"
              autoComplete="off"
              placeholder="Password Confirmation"
            />
            <button className="sign-up-btn">Create account</button>
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

export default LogUp;
