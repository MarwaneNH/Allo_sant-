import React from "react";

function Agenda() {
  return (
    <div className="agenda">
      <div className="agenda-container">
        <div className="agenda-header">
          <div className="title">
            <h1>Bonjour, Dr .KIHAL!</h1>
            <p>Vérifier les dernières mises à jour sur votre compte</p>
          </div>
          <div className="agenda-statistique">
            <div className="agenda-state">
              <div>
                <img src="../icon/rdv-acc.svg" alt="" />
                <h2>22</h2>
                <span>/40</span>
              </div>
              <p>Rendez-Vous acceptés</p>
            </div>
            <div className="agenda-state">
              <div>
                <img src="../icon/rdv-ref.svg" alt="" />
                <h2>18</h2>
                <span>/40</span>
              </div>
              <p>Rendez-Vous refusés</p>
            </div>
            <div className="agenda-state">
              <div>
                <img src="../icon/patient.svg" alt="" />
                <h2>56</h2>
              </div>
              <p>Totale des patients</p>
            </div>
          </div>
        </div>
        <div className="agenda-rdv">
          <h2>Mes Rendez-Vous</h2>
          <div className="my-rgv">
            <div className="small-rdv">
              <div className="time">10:00 - 11:00</div>
              <div className="user">
                <div className="user-img">
                  <img src="../icon/user.svg" alt="" />
                </div>
                <div className="user-name">Lorem Ipsum</div>
              </div>
              <div className="date">Nov 06, 2022</div>
              <div className="statuts">
                <div className="completé">
                  <img src="../icon/completé.svg" alt="" />
                  <span>completé</span>
                </div>
              </div>
              <div className="detail-btn">
                <div></div>
              </div>
            </div>
            <div className="small-rdv">
              <div className="time">10:00 - 11:00</div>
              <div className="user">
                <div className="user-img">
                  <img src="../icon/user.svg" alt="" />
                </div>
                <div className="user-name">Lorem Ipsum</div>
              </div>
              <div className="date">Nov 06, 2022</div>
              <div className="statuts">
                <div className="en-attente">
                  <img src="../icon/en-attente.svg" alt="" />
                  <span>en-attente</span>
                </div>
              </div>
              <div className="detail-btn">
                <div></div>
              </div>
            </div>
            <div className="small-rdv">
              <div className="time">10:00 - 11:00</div>
              <div className="user">
                <div className="user-img">
                  <img src="../icon/user.svg" alt="" />
                </div>
                <div className="user-name">Lorem Ipsum</div>
              </div>
              <div className="date">Nov 06, 2022</div>
              <div className="statuts">
                <div className="refusé">
                  <img src="../icon/refusé.svg" alt="" />
                  <span>refusé</span>
                </div>
              </div>
              <div className="detail-btn">
                <div></div>
              </div>
            </div>
            <div className="small-rdv">
              <div className="time">10:00 - 11:00</div>
              <div className="user">
                <div className="user-img">
                  <img src="../icon/user.svg" alt="" />
                </div>
                <div className="user-name">Lorem Ipsum</div>
              </div>
              <div className="date">Nov 06, 2022</div>
              <div className="statuts">
                <div className="passé">
                  <img src="../icon/passé.svg" alt="" />
                  <span>passé</span>
                </div>
              </div>
              <div className="detail-btn">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="next-rdv">
        <h2>Prochain RDV</h2>
        <div className="rdv">
          
        </div>
      </div>
      <div className="date-container">
        <div className="date">
          <img src="../icon/date.svg" alt="" />
          <span>Lun, 16 Mars</span>
        </div>
        <div className="time">
          <img src="../icon/time.svg" alt="" />
          <span>09:32</span>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
