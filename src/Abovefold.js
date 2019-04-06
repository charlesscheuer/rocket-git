import React from 'react';
import { Link } from 'react-router-dom';
import rocketLogo from '../src/img/rocket-02.png';
import rocketTitle from '../src/img/Rocket Apparel@2x.png';

const Abovefold = ({ctaRouteChange}) => {
    return (
      <div className="aboveFold">
      <img className="rocketTitle" src={rocketTitle} alt="rocket apparel"/>
      <div className="logo">
        <img className="rocketLogo" src={rocketLogo} alt="rocket logo"/>
      </div>
      <h1>Cliche copywriting goes right here</h1>
      <div className="cta">
      <Link to="/Our-story" className="btn">Our Story</Link>
      <Link to="/Fleece" className="btn">The Fleece</Link>
      </div>
      </div>
    )
}

export default Abovefold;