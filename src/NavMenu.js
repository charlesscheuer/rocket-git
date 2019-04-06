import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const email = 'charlesfscheuer@gmail.com';

class NavMenu extends Component {

  
    render (){
      return (
        <div className="navigation">
        <div className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><Link onClick={this.props.click} className="navigation__link" to="/Fleece">The Fleece</Link></li>
                <li className="navigation__item"><Link onClick={this.props.click} className="navigation__link" to="/Our-Story">Our Story</Link></li>
                <li className="navigation__item" ><p className="navigation__link" ><a href={`mailto:${email}`}>Contact us</a></p></li>
                <li className="navigation__item"><p className="navigation__link"><a  href={`mailto:${email}`}>Send feedback</a></p></li>
            </ul>
        </div>
        </div>
      );
    }
  }


export default NavMenu;
