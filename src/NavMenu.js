import React from 'react'
const email = 'charlesfscheuer@gmail.com';

const NavMenu = ({onRouteChange}) =>  {
    return (
        <div className="navigation">
        <div className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item" onClick={() => onRouteChange('Fleece')}><p className="navigation__link" href="#">The Fleece</p></li>
                <li className="navigation__item" onClick={() => onRouteChange('Ourstory')}><p className="navigation__link" href="#">Our Story</p></li>
                <li className="navigation__item" ><p className="navigation__link" ><a href={`mailto:${email}`}>Contact us</a></p></li>
                <li className="navigation__item"><p className="navigation__link"><a  href={`mailto:${email}`}>Send feedback</a></p></li>
            </ul>
        </div>
      </div>
    )
}

export default NavMenu;
