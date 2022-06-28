import React from "react";

function Header() {
  return (
    <header
      className="w3-display-container w3-content w3-wide"
      style={{ maxWidth: "1600px", minWidth: "500px" }}
      id="home"
    >
      <img
        className="w3-image"
        src="img/Slide.png"
        alt="Docteurs"
        width="1600"
        height="800"
      />
      <div className="clsDefinition">
        <h1>
          <center>
            Trouvez votre médecin et prenez rendez-vous en consultation cabinet
          </center>
        </h1>
      </div>
      <div className="FormulaireRegister">
        <div className="brand-logo"></div>
        <div className="brand-title">
          <h1>Au Cabinet</h1>
        </div>
        <div className="inputs">
          <input
            type="email"
            placeholder="Médecin, pharmacie..."
            className="inputForm"
          />
          <br />
          <input
            type="email"
            placeholder="Choisir une ville"
            className="inputForm"
          />
          <br />
          <input type="email" placeholder="choisir Dr" className="inputForm" />
          <br />
          <input
            type="password"
            placeholder="choisir une pharmacie"
            className="inputForm"
          />
          <button className="buttonForm" type="submit">
            Rechercher
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
