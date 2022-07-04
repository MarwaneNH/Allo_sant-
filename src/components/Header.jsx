import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src="../img/bg.png" alt="" className="bg" />
      <div className="bg-doctors">
        <img src="../img/doctors.png" alt="" />
      </div>
      <div className="header-container">
        <div className="header-content">
          <h1>
            Trouvez votre <br /> Médecin et Prenez RDV
          </h1>
          <form>
            <h2>Au Cabinet</h2>
            <div className="option">
              <p>Voulez-vous un</p>
              <div>
                <label htmlFor="doctor">Médecin</label>
                <input type="radio" name="option" id="doctor" />
              </div>
              <div>
                <label htmlFor="pharmacie">Pharmacie</label>
                <input type="radio" name="option" id="pharmacie" />
              </div>
            </div>
            <div>
              <label htmlFor="speciality">Spécialité</label>
              <input
                type="text"
                id="speciality"
                name="speciality"
                placeholder="Spécialité"
              />
            </div>
            <div>
              <label htmlFor="city">Ville</label>
              <input type="text" id="city" name="city" placeholder="Ville" />
            </div>
            <div>
              <label htmlFor="street">Rue</label>
              <input type="text" id="street" name="street" placeholder="Rue" />
            </div>

            <Link to="/recherche">
              <button>Chercher</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
