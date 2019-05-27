/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom';

ReactGA.initialize('UA-133410946-2');

const email = 'charlesfscheuer@gmail.com';

class NavMenu extends Component {
  eventHandler = event => {
    const { click } = this.props;
    const result = `user went to ${event}`;
    click();
    ReactGA.event({
      category: 'NavMenu',
      action: result,
      storage: 'none'
    });
  };

  render() {
    return (
      <div className="navigation">
        <div className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                onClick={() => this.eventHandler('Home')}
                className="navigation__link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => this.eventHandler('Fleece')}
                className="navigation__link"
                to="/Fleece"
              >
                The Fleece
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={() => this.eventHandler('OurStory')}
                className="navigation__link"
                to="/Our-Story"
              >
                Our Story
              </Link>
            </li>
            <li className="navigation__item">
              <a
                onClick={() => this.eventHandler('ContactUs')}
                className="navigation__link"
                href={`mailto:${email}`}
              >
                Contact us
              </a>
            </li>
            <li className="navigation__item">
              <a
                onClick={() => this.eventHandler('SendFeedback')}
                className="navigation__link"
                href={`mailto:${email}`}
              >
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
