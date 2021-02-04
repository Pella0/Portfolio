import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/Home.scss';
import { Link } from 'react-router-dom';
import Ju from './images/Ju.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="ju">
        <img className="juimg" src={Ju} alt="Ju" />
      </div>
      <div className="juInfos">
        <p>Hello, Je suis Julien, developpeur Web et Web mobile</p>
        <Link to="/projets">
          <button type="button" className="projetsButton">
            Mes projets
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
