import React from 'react';
import rocketLogo from '..2/src/img/rocket-02.png';
import rocketTitle from '..2/src/img/Rocket Apparel@2x.png';

const Abovefold = ({ctaRouteChange}) => {
    return (
      <div className="aboveFold">
      <img className="rocketTitle" src={rocketTitle} alt="rocket apparel"/>
      <h1>Cliche copywritings goes right here</h1>
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