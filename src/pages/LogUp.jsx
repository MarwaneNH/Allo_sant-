import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function LogUp() {
  const [isAdmin, setIsAdmin] = useState();

  return (
    <div className="logging-page">
      {/* <NavBar /> */}

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
            <div>
              <label htmlFor="isDoctor">Je suis docteur</label>
              <input
                onChange={(e) => {
                  setIsAdmin(e.target.checked);
                }}
                type="checkbox"
                name="isDoctor"
                id="isDoctor"
              />
            </div>
            {isAdmin && (
              <>
                <input type="text" name="street" placeholder="Rue" />
                <input type="text" name="city" placeholder="Ville" />
                <input type="text" name="speciality" placeholder="Spécialité" />
              </>
            )}
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
        <img src="../img/log-doc-img.avif" alt="" />
      </div>
    </div>
  );
}

export default LogUp;
