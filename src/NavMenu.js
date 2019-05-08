/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const email = 'charlesfscheuer@gmail.com';

class NavMenu extends Component {
  render() {
    const { click } = this.props;
    return (
      <div className="navigation">
        <div className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link onClick={click} className="navigation__link" to="/">
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link onClick={click} className="navigation__link" to="/Fleece">
                The Fleece
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={click}
                className="navigation__link"
                to="/Our-Story"
              >
                Our Story
              </Link>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href={`mailto:${email}`}>
                Contact us
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href={`mailto:${email}`}>
                Send feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavMenu;
