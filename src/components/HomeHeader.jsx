import React from 'react'

function Header() {
  return (
    <header
    class="w3-display-container w3-content w3-wide"
    style={{maxWidth: "1600px", minWidth: "500px"}}
    id="home"
  >
    <img
      class="w3-image"
      src="img/Slide.png"
      alt="Docteurs"
      width="1600"
      height="800"
    />
    <div class="clsDefinition">
      <h1>
        <center>
          Trouvez votre médecin et prenez rendez-vous en consultation cabinet
        </center>
      </h1>
    </div>
    <div class="FormulaireRegister">
      <div class="brand-logo"></div>
      <div class="brand-title"><h1>Au Cabinet</h1></div>
      <div class="inputs">
        <input
          type="email"
          placeholder="Laboratoire,médecin,pharmacie"
          class="inputForm"
        /><br />
        <input
          type="email"
          placeholder="Choisir une ville"
          class="inputForm"
        /><br />
        <input
          type="email"
          placeholder="choisir Dr"
          class="inputForm"
        /><br />
        <input
          type="password"
          placeholder="choisir une pharmacie"
          class="inputForm"
        />
        <button class="buttonForm" type="submit">Rechercher</button>
      </div>
    </div>
  </header>
  )
}

export default Header