import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Agenda from "../components/dashbord/Agenda";
import Patients from "../components/dashbord/Patients";
import Demande from "../components/dashbord/Demande";
import Historique from "../components/dashbord/Historique";
import Compte from "../components/dashbord/Compte";
import DateHeader from "../components/dashbord/DateHeader";

function Dashboard() {
  const activeClass = (e) => {
    const allLi = [
      ...e.target.parentElement.parentElement.querySelectorAll("li"),
    ];
    allLi.forEach((li) => li.classList.remove("active"));
    e.target.classList.toggle("active");
  };

  return (
    <div className="dashbord">
      <div className="dashbord-menu">
        <Link to="/">
          <img src="../icon/logo-white.svg" alt="" height="90px" />
        </Link>
        <div className="user">
          <div className="user-img">
            <img src="../icon/user.svg" alt="" />
          </div>
          <div className="user-detail">
            <h4>Dr. Samie HAIND</h4>
            <p>Médecin</p>
          </div>
        </div>

        <h2>Dashboard</h2>

        <ul>
          <Link to="agenda">
            <li onClick={activeClass} className="active">
              Agenda
            </li>
          </Link>
          <Link to="patients">
            <li onClick={activeClass}>Mes Patients</li>
          </Link>
          <Link to="demande">
            <li onClick={activeClass}>Demande</li>
          </Link>
          <Link to="historique">
            <li onClick={activeClass}>Historique</li>
          </Link>
          <Link to="compte">
            <li onClick={activeClass}>Compte</li>
          </Link>
        </ul>

        <button>Se déconneter</button>
      </div>

      <DateHeader />

      <Routes>
        <Route exact path="/" element={<Agenda />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/demande" element={<Demande />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="/compte" element={<Compte />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
