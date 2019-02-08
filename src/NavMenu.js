import React from 'react'
const email = 'charlesfscheuer@gmail.com';

const NavMenu = ({onRouteChange}) =>  {
    return (
        <div className="navigation">
        <div className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item" onClick={() => onRouteChange('Fleece')}><a className="navigation__link" href="#">The Fleece</a></li>
                <li className="navigation__item" onClick={() => onRouteChange('Ourstory')}><a className="navigation__link" href="#">Our Story</a></li>
                <li className="navigation__item" ><a className="navigation__link" href={`mailto:${email}`}>Contact us</a></li>
                <li className="navigation__item"><a className="navigation__link" href={`mailto:${email}`}>Send feedback</a></li>
            </ul>
        </div>
      </div>
    )
}

export default NavMenu;
