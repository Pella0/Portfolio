import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projets = () => {
  // console.log(props.match.params);
  const URL = 'http://localhost:5000';

  const [projets, setProjets] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/projets/1`)
      .then((reponse) => {
        console.log(reponse);
        setProjets(reponse.data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <p>{projets.Name}</p>
    </div>
  );
};

export default Projets;
