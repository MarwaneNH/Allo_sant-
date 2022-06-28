import React from "react";

function Doctor({ setDocDetails }) {
  return (
    <div className="result-item">
      <div className="item-img">
        <img src="../img/doctor.jpg" alt="" />
      </div>
      <div className="item-content">
        <div className="title">
          <div>
            <h4>Dr. Said KIHAL</h4>
            <span>Disponible</span>
          </div>
          <p>Cardiologe</p>
        </div>
        <div className="detail">
          <p>3667 B Street,Saint Paul, Minnesata.</p>
          <p>saidkihal@doctor.ma</p>
          <p>+ 212 5 22 45 45 54</p>
        </div>
        <button onClick={() => setDocDetails(true)}>Prendre RDV</button>
      </div>
    </div>
  );
}

export default Doctor;
