import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const nav = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) nav.current.classList.add("scrolled");
      if (window.pageYOffset === 0) nav.current.classList.remove("scrolled");
    });
  });

  return (
    <div className="navbar" ref={nav}>
      <nav>
        <Link to="/">
          <img src="../icon/logo.svg" alt="allo santé logo" height="46px" />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/">à propos</Link>
          </li>
          <li>
            <Link to="/">Question fréquentes</Link>
          </li>
          <li>
            <Link to="/">Contactez-nous</Link>
          </li>
        </ul>
        <div className="log-section">
          <div className="log-btn">
            <Link to="/login">
              <button className="log-in-btn">Log In</button>
            </Link>
            <Link to="/logup">
              <button className="log-up-btn">Register</button>
            </Link>
          </div>
          <div className="log-user hide">
            <img src="../icon/user-img.svg" alt="" height="60px" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
