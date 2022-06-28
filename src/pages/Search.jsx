import React, { useState } from "react";
import Doctor from "../components/Doctor";
import DoctorRDV from "../components/DoctorRDV";
import NavBar from "../components/NavBar";

function Search() {
  const [docDetails, setDocDetails] = useState(false);

  return (
    <div className="search">
      <NavBar />
      {docDetails && <DoctorRDV setDocDetails={setDocDetails} />}
      <div className="search-input">
        <div className="search-input-container">
          <div>
            <label htmlFor="sortBy">Tirer par</label>
            <select name="sortBy" id="sortBy">
              <option value="populaire">populaire</option>
              <option value="disponibility">disponibilité</option>
              <option value="plusProche">plus proche</option>
            </select>
          </div>
          <div>
            <label htmlFor="speciality">Spécialité</label>
            <select name="sortBy" id="sortBy">
              <option value="populaire">populaire</option>
              <option value="disponibility">disponibilité</option>
              <option value="plusProche">plus proche</option>
            </select>
          </div>
          <div>
            <label htmlFor="city">Ville</label>
            <input type="text" name="city" id="city" placeholder="Rue" />
          </div>
          <button>Chercher</button>
        </div>
      </div>
      <div className="result">
        <p>7 résultat de recherche</p>
        <div className="result-container">
          <Doctor setDocDetails={setDocDetails} />
          <Doctor setDocDetails={setDocDetails} />
          <Doctor setDocDetails={setDocDetails} />
          <Doctor setDocDetails={setDocDetails} />
          <Doctor setDocDetails={setDocDetails} />
          <Doctor setDocDetails={setDocDetails} />
          <Doctor setDocDetails={setDocDetails} />
        </div>
      </div>
    </div>
  );
}

export default Search;
