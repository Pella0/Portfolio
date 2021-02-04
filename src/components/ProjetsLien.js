/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style/ProjetsLien.scss';

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
    <div className="card-Projet">
      {projets.map((e) => (
        <div className="card">
          <Link className="Link" to={`/projets/${e.id}`}>
            <div className="card-image">
              <img src={e.Logo} alt="Orange" />
            </div>

            <div className="card-body">
              <div className="card-date">
                <time>{e.date}</time>
              </div>

              <div className="card-title">
                <h3>{e.Name}</h3>
              </div>

              <div className="card-excerpt">
                <p>Client : {e.projet_context}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjetsLien;
