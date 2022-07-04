import React from "react";
import Navbar from "./Navbar";

function Footer() {
  return (
    <>
      <section className="footer">
        <Navbar />
        <div className="footer-container">
          <div className="footer-content">
            <h4>About</h4>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie.
            </p>
          </div>
          <div className="footer-content">
            <h4>About</h4>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie.
            </p>
          </div>
          <div className="footer-content">
            <h4>About</h4>
            <p>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie.
            </p>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Copyright @AlloSanté 2022,<span> All right Resereved.</span>
        </p>
      </footer>
    </>
  );
}

export default Footer;
