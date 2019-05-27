import React from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';
import rocketLogo from './img/rocket-02.png';
import rocketTitle from './img/Rocket Apparel@2x.png';

ReactGA.initialize('UA-133410946-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const Abovefold = () => {
  return (
    <div className="aboveFold">
      <img className="rocketTitle" src={rocketTitle} alt="rocket apparel" />
      <div className="logo">
        <img className="rocketLogo" src={rocketLogo} alt="rocket logo" />
      </div>
      <h1>
        Launching the Rocket: the first of a series of non-profit products that
        raise awareness for and solve ecological issues
      </h1>
      <div className="cta">
        <Link to="/Our-story" className="btn">
          Our Story
        </Link>
        <Link to="/Fleece" className="btn">
          The Fleece
        </Link>
      </div>
    </div>
  );
};

export default Abovefold;
