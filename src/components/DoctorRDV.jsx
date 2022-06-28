import React from "react";

function DoctorRDV({ setDocDetails }) {
  const closeSectoin = () => {
    setDocDetails(false);
  };

  return (
    <div className="doctor-rdv">
        <div className="bg" onClick={closeSectoin}></div>
      <div className="rdv-container">
        <div className="close-btn" onClick={closeSectoin}></div>

        <div className="doctor">
          <div className="item-img">
            <img src="../img/doctor.jpg" alt="" />
          </div>

          <div className="title">
            <div>
              <h1>Dr. Said KIHAL</h1>
              <span>Disponible</span>
            </div>
            <p>Cardiologe</p>
          </div>

          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beataeassumenda nam architecto obcaecati rem totam impedit quas!
              Dictased nulla atque placeat consequatur? Temporibus in ullam,
              commodianimi consequatur voluptatibus?
            </p>

            <div className="detail">
              <p>3667 B Street,Saint Paul, Minnesata.</p>
              <p>saidkihal@doctor.ma</p>
              <p>+ 212 5 22 45 45 54</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="form-container">
          <div className="title">
            <h1>Prendre Rendez-vous</h1>
            <p>Le lorem ipsum est simplement.</p>
          </div>
          <form>
            <div>
              <div className="malade">
                <div>
                  <label htmlFor="name">Le malade</label>
                  <input type="text" name="name" placeholder="Name" id="name" />
                </div>
                <div>
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                  />
                </div>
              </div>

              <div className="horaire">
                <div>
                  <label htmlFor="date">Date</label>
                  <input type="date" name="date" id="date" />
                </div>
                <div>
                  <label htmlFor="time">Heure</label>
                  <input type="text" name="time" placeholder="Time" id="time" />
                </div>
              </div>
            </div>

            <div className="description">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder="Description..."
                id="description"
              />
            </div>

            <button>Prendre RDV</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorRDV;
