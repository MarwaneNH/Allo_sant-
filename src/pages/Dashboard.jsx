import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Agenda from "../components/dashbord/Agenda";
import Products from "../components/dashbord/Products";

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
          <Link to="products">
            <li onClick={activeClass}>Mes Patients</li>
          </Link>
          <Link to="products">
            <li onClick={activeClass}>Demande</li>
          </Link>
          <Link to="products">
            <li onClick={activeClass}>Historique</li>
          </Link>
          <Link to="products">
            <li onClick={activeClass}>Compte</li>
          </Link>
        </ul>

        <button>Se déconneter</button>
      </div>

      <Routes>
        <Route exact path="/" element={<Agenda />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/products" element={<Products />} />
        {/* <Route exact path="/orders" element={<Orders />} /> */}
      </Routes>
    </div>
  );
}

export default Dashboard;
