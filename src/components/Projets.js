/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/Projet.scss';
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';

const Projets = (props) => {
  // console.log(props.match.params);
  /* const URL = 'http://localhost:5000';
   */
  const [projets, setProjets] = useState([]);
  /* const [projetsScreen, setProjetsScreen] = useState([]); */
  const data = props.match.params;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projets/${data.id}`)
      .then((reponse) => {
        console.log(reponse);
        setProjets(reponse.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="projet-container">
      <div className="projet-infos">
        <img
          className={`logo-${projets.title}`}
          src={projets.Logo}
          alt="logo"
        />
        <div className="infos-details">
          <p>{projets.Projet_Description}</p>
          <p>Methode : {projets.Methode}</p>
          <p>{projets.Details_Client}</p>
          <img className="Client" src={projets.Lien_Client} alt="client" />
          <p>Techno utilisé {projets.Name}</p>
          {/* <img className="Thechno" src={projets.Techno.name} alt="client" /> */}
        </div>
      </div>

      <div className="CarrouselClient">
        <Carousel autoPlay>
          <div>
            <img className="screen1" src={projets.screen1} alt="screen1" />
          </div>
          <div>
            <img className="screen2" src={projets.screen2} alt="screen1" />
          </div>
          <div>
            <img className="screen3" src={projets.screen3} alt="screen1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Projets;
