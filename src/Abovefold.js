import React from 'react';
import rocketLogo from '../src/img/rocket-02.png';
import rocketTitle from '../src/img/Rocket Apparel@2x.png';

const Abovefold = ({ctaRouteChange}) => {
    return (
      <div className="aboveFold">
      <img className="rocketTitle" src={rocketTitle} alt="rocket apparel"/>
      <h1>Cliche copywriting goes right here</h1>
      <div className="logo">
      <img className="rocketLogo" src={rocketLogo} alt="rocket logo"/>
      </div>
      <div className="cta">
      <button className="btn" onClick={() => ctaRouteChange('Ourstory')}>Our story</button>
      <button className="btn" onClick={() => ctaRouteChange('Fleece')}>The Fleece</button>
      </div>
      </div>
    )
}

export default Abovefold;