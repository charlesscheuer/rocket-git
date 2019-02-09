import React from 'react'
import rocketLogo from '../src/img/rocket-02.png';
const email = 'charlesfscheuer@gmail.com';

const Footer = ({ctaRouteChange}) =>  {
    return (
      <div className="footer">
        <ul className="nav">
            <li className="nav__item"><a href="#" onClick={() => ctaRouteChange('Abovefold')} className="nav__link btn">Home</a></li>
            <li className="nav__item"><a href="#" onClick={() => ctaRouteChange('Fleece')} className="nav__link btn">Fleece</a></li>
            <li className="nav__item"><a className="nav__link btn" href={`mailto:${email}`}>Contact</a></li>
            <li className="nav__item"><a className="nav__link btn" href={`mailto:${email}`}>Send Feedback</a></li>
            <li className="nav__item"><a href="#" className="nav__link btn" onClick={() => ctaRouteChange('Ourstory')}>Our Story</a></li>
        </ul>
        <div className="footer__img">
            <img className="__logo" src={rocketLogo} alt="rocket logo"/>
        </div>
      </div>
    )
  }

export default Footer;
