/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      {projets.map((e) => (
        <Link to={`/projets/${e.id}`}>
          <div>
            <img className="logo" src={e.Logo} alt="logo" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjetsLien;
