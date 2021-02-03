/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projets = (props) => {
  // console.log(props.match.params);
  /* const URL = 'http://localhost:5000';
   */
  const [projets, setProjets] = useState([]);
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
    <div>
      <p>{projets.Name}</p>
      <p>{projets.Projet_Description}</p>
      <p>{projets.Methode}</p>
      <p>{projets.Lien_Client}</p>
      <img className="logo" src={projets.Logo} alt="logo" />
    </div>
  );
};

export default Projets;
