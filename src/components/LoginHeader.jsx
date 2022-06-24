import React from "react";

function LoginHeader() {
  return (
    <header
      class="w3-display-container w3-content w3-wide"
      style={{ maxWidth: "1600px", minWidth: "500px" }}
      id="home"
    >
      <img
        class="w3-image"
        src="img/Medium/Rectangle 40.png"
        alt="Docteurs"
        width="1600"
        height="1000px !important"
      />
      <div class="clsDefinition" style={{ width: "70% !important" }}>
        <h1>
          <center>
            Trouvez votre médecin et prenez rendez-vous en consultation cabinet
            ou vidéo
          </center>
        </h1>
      </div>
      <div class="FormulaireInscription">
        <div class="brand-logo"></div>
        <div class="brand-title">
          <h1>Inscription</h1>
        </div>
        <div class="inputs">
          <input type="email" placeholder="identifient" class="inputForm" />
          <br />
          <input type="email" placeholder="Votre email" class="inputForm" />
          <br />
          <input
            type="email"
            placeholder="Numero Telephone"
            class="inputForm"
          />
          <br />
          <input type="password" placeholder="Mot de passe" class="inputForm" />
          <button class="buttonForm" type="submit">
            Enregistrer
          </button>
        </div>
      </div>

      <div class="FormulaireIndentified">
        <div class="brand-logo"></div>
        <div class="brand-title">
          <h1>S'identifier</h1>
        </div>
        <div class="inputs">
          <input type="email" placeholder="identifient" class="inputForm" />
          <br />
          <input type="email" placeholder="Mot de passe" class="inputForm" />
          <br />
          <button class="buttonForm" type="submit">
            login
          </button>
        </div>
      </div>
    </header>
  );
}

export default LoginHeader;
