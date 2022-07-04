import React from "react";

function MainContent() {
  return (
    <div className="main-content">
      <section className="first-section">
        <div className="content">
          <h1>Docteur, êtes-vous à la pointe de la technologie ?</h1>
          <p>
            Découvrez la prise de rendez-vous en ligne Gérez vos disponibilités
            en toute simplicité Réduisez les rendez-vous non honorés Offrez une
            expérience exceptionnelle à tous vos patients.
          </p>
          <button>Tous les services</button>
        </div>
        <div className="images">
          <img src="../img/Pharmacie.png" alt="" />
          <img src="../img/chu_0.png" alt="" />
          <img src="../img/logo.png" alt="" />
          <img src="../img/200x200.png" alt="" />
          <img src="../img/CHU-Mohammed-VI-dOujda.png" alt="" />
          <img src="../img/Centre-Hospitalier-Mohamed-VI.png" alt="" />
        </div>
      </section>
      <section className="blue-section">
        <article>
          <img src="../icon/user-img.svg" alt="" />
          <h3>Tests de labo</h3>
          <p>
            Vous pouvez toujours nous contacter au plus tard la veille pour
            prendre un rendez-vous au Laboratoire G Lab, à votre domicile ou sur
            votre lieu de travail. Le Lorem Ipsum est simplement du faux
          </p>
        </article>
        <article>
          <img src="../icon/user-img.svg" alt="" />
          <h3>RDV Médcin</h3>
          <p>
            En cabinet consultez votre docteur, médecin généraliste,
            spécialiste(dentiste, dermatologue, gynécologue, cardiologue,
            pédiatre, ophtalmologue.)
          </p>
        </article>
        <article>
          <img src="../icon/user-img.svg" alt="" />
          <h3>Pharmacie générale</h3>
          <p>
            Trouver votre pharmacie qui se si tue a cote de vous avec l'aide de
            notre outils de localisation.
          </p>
        </article>
      </section>
      <section className="about-section">
        <div className="about">
          <div className="content">
            <h1>à propos de nous</h1>
            <p>
              Allosanté est un site qui permet aux utilisateurs de prendre des
              rendez vous chez nos meilleurs spécialistes medcins , et chez nos
              loboratoirs , avec toute simplicité en remplissant un simple
              formulaire . Notre site permet aussi de trouver votre pharmacie la
              plus proche de vous.
            </p>
            <button>Plus d'info</button>
          </div>
          <div className="images"></div>
        </div>
        <div className="why">
          <div className="images"></div>
          <div className="content">
            <h1>Pourquoi nous choisir ?</h1>
            <p>
              Allosanté permet a ses utilisateurs de prendre un rendez-vous chez
              les medcins les plus proches , avec un simple formulaire médical
              en ligne qui simplifie le processus , en recueillant des
              informations pertinentes telles que la date et le type du
              rendez-vous.
            </p>
            <div className="services">
              <div>
                <img src="../icon/user.svg" alt="" />
                <div>
                  <h4>Nos médecins</h4>
                  <p>
                    Allosanté s'associe avec plusieurs médecins spécialistes
                    dont leurs réputations est très connue.
                  </p>
                </div>
              </div>
              <div>
                <img src="../icon/user.svg" alt="" />
                <div>
                  <h4>Laboratoires</h4>
                  <p>
                    Allosanté s'associe avec plusieurs médecins spécialistes
                    dont leurs réputations est très connue.
                  </p>
                </div>
              </div>
              <div>
                <img src="../icon/user.svg" alt="" />
                <div>
                  <h4>Localiser les pharmacies</h4>
                  <p>
                    Allosanté s'associe avec plusieurs médecins spécialistes
                    dont leurs réputations est très connue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fav-doc">
          <h1>Nos médecins les plus réputé</h1>
          <p>
            Ci-dessous les médecins les plus fréquentés par nos utilisateurs.
          </p>
          <div className="doctors">
            <div className="doc">
              <img src="../img/doctor.jpg" alt="" />
              <h2>Loren Castro</h2>
              <p>Dentiste</p>
            </div>
            <div className="doc">
              <img src="../img/doctor.jpg" alt="" />
              <h2>Loren Castro</h2>
              <p>Dentiste</p>
            </div>
            <div className="doc">
              <img src="../img/doctor.jpg" alt="" />
              <h2>Loren Castro</h2>
              <p>Dentiste</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
