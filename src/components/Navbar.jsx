import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navbar = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        navbar.current.classList.add("scrolled");
      } else {
        navbar.current.classList.remove("scrolled");
      }
    });
  }, []);

  return (
    <div className="w3-top">
      <nav ref={navbar}>
        <div className="clsMenuHeader" style={{ letterSpacing: "2px" }}>
          <Link to="/" className="w3-bar-item w3-button">
            Accueil
          </Link>
          {/* Right-sided navbar links. Hide them on small screens */}
          <a href="#about" className="w3-bar-item w3-button">
            A propos
          </a>
          <a href="#menu" className="w3-bar-item w3-button">
            Questions Fréquentes
          </a>
          <a href="#contact" className="w3-bar-item w3-button">
            Contactez-nous
          </a>

          <div className="w3-right w3-hide-small"></div>
        </div>
        <div className="clsMenuHeaderButtons">
          <ul>
            <Link to='/logup'>
              <img src="img/Groupe14.png" alt="" />
            </Link>
            <Link to='/login'>
              <img src="img/Groupe1.png" alt="" />
            </Link>
          </ul>
        </div>
        <div className="clsLogo">
          <Link to='/registration'>
            <img src="img/logo-allostante.png" alt="" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
