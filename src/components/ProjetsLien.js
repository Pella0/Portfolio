/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/CarrouselProjet.scss';
import { Carousel } from 'react-responsive-carousel';

const ProjetsLien = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projets`)
      .then((reponse) => {
        console.log(reponse);
        setProjets(reponse.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="CarrouselClient">
      <Carousel>
        {projets.map((e) => (
          <div className="CarrouselClient">
            <img className="logo" src={e.Logo} alt="logo" />
            <Link to={`/projets/${e.id}`}>
              <p className="legend">{e.Name}</p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProjetsLien;
