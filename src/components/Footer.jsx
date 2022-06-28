import React from "react";

function Footer() {
  return (
    <>
      <div className="clsdivmenufooter">
        <div style={{ float: "left", marginTop: "20px", marginLeft: "10%" }}>
          <a href="/">
            <img src="img/logo-allostante.png" alt="" />
          </a>
        </div>
        <center>
          <div style={{ paddingTop: "25px" }}>
            <a
              href="#home"
              className="w3-bar-item w3-button"
              style={{ color: "#595959", fontWeight: "bold" }}
            >
              A propos
            </a>
            <a
              href="#about"
              className="w3-bar-item w3-button"
              style={{ color: "#595959", fontWeight: "bold" }}
            >
              Questions Fréquentes
            </a>
            <a
              href="#menu"
              className="w3-bar-item w3-button"
              style={{ color: "#595959", fontWeight: "bold" }}
            >
              Allosanté in English
            </a>
          </div>
        </center>
      </div>
      <div className="clsfooterindex">
        <div className="cls3divssameline">
          <div></div>
        </div>
        <div className="clsblocks">
          <div className="clsdivintodivsruisfooter">
            <h6 style={{ color: "#595959", fontWeight: "bold" }}>About</h6>
            <p style={{ color: "#999999" }}>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie
            </p>
          </div>
        </div>
        <div className="clsblocks">
          <div className="clsdivintodivsruisfooter">
            <h6 style={{ color: "#595959", fontWeight: "bold" }}>About</h6>
            <p style={{ color: "#999999" }}>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie
            </p>
          </div>
        </div>
        <div className="clsblocks">
          <div className="clsdivintodivsruisfooter">
            <h6 style={{ color: "#595959", fontWeight: "bold" }}>About</h6>
            <p style={{ color: "#999999" }}>
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression. Le Lorem Ipsum
              est le faux texte standard de l'imprimerie
            </p>
          </div>
        </div>
      </div>
      <div className="clsdivlastfooter">
        <p style={{ paddingLeft: "30px", float: "left", color: "white" }}>
          Copyright @ AlloSanté 2022,All right Resereved
        </p>
      </div>
    </>
  );
}

export default Footer;
