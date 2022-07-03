import React from "react";

function Compte() {
  return (
    <div className="agenda">
      <div className="agenda-container">
        <div className="agenda-header">
          <div className="title">
            <h1>Mon compte</h1>
            <p>Tous les patients qui demandent ou ont déjà pris rendez-vous</p>
          </div>
        </div>

        <div className="compte-input">
          <div className="input-container">
            <div className="perso-input">
              <div className="img-input">
                <div>
                  <img src="../icon/user.svg" alt="" />
                </div>
                  <button>
                    <img src="../icon/edit-btn.svg" alt="" />
                  </button>
              </div>
              <div className="too-inputs">
                <div>
                  <label htmlFor="nom">Nom</label>
                  <input type="text" name="nom" placeholder="Nom" id="nom" />
                </div>
                <div>
                  <label htmlFor="prenom">Prénom</label>
                  <input
                    type="text"
                    name="prenom"
                    placeholder="Prénom"
                    id="prenom"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="phone">Téléphone</label>
                <input
                  type="tele"
                  name="phone"
                  placeholder="Téléphone"
                  id="phone"
                />
              </div>
              <div>
                <label htmlFor="adress">Adresse</label>
                <input
                  type="adress"
                  name="adress"
                  placeholder="Adresse"
                  id="adress"
                />
              </div>
              <div className="too-inputs">
                <div>
                  <label htmlFor="city">Ville</label>
                  <input
                    type="city"
                    name="city"
                    placeholder="Ville"
                    id="city"
                  />
                </div>
                <div>
                  <label htmlFor="street">Rue</label>
                  <input
                    type="street"
                    name="street"
                    placeholder="Rue"
                    id="street"
                  />
                </div>
              </div>
              <button>Enregistrer</button>
            </div>

            <div className="special-input">
              <div>
                <label htmlFor="speciality">Spécialité</label>
                <input
                  type="text"
                  name="speciality"
                  placeholder="Spécialité"
                  id="speciality"
                />
              </div>
              <div>
                <label htmlFor="bio">Bio</label>
                <textarea
                  type="text"
                  name="bio"
                  placeholder="Bio..."
                  id="bio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compte;
