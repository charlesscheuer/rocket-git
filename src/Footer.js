import React, { Component } from 'react';
import rocketLogo from './img/rocket-svg-02.png';
import rocketTitle from './img/Rocket Apparel@2x.png';
import EmailIcon from './EmailIcon';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';

// const myEmail = 'charlesfscheuer@gmail.com';

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctrSub: '',
      submitted: false,
      label: 'Email address'
    };
  }

  onEmailChange = event => {
    this.setState({ ctrSub: event.target.value });
  };

  onSubmitEmail = () => {
    const { ctrSub } = this.state;
    if (regexp.test(ctrSub) && ctrSub.length > 1) {
      fetch('https://sleepy-lake-80658.herokuapp.com/register', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: ctrSub
        })
      })
        .then(response => response.json())
        .then(data => {
          if (data === 'success') {
            this.setState({ submitted: true });
          }
        })
        .catch(error => console.log(error));
    } else {
      this.setState({
        label: 'Invalid email address, try again'
      });
    }
  };

  goBackHandler = () => {
    this.setState({ submitted: false });
  };

  render() {
    const { submitted, label } = this.state;
    return (
      <div className="footer">
        <div className="bottom">
          <div className="bottom__form">
            {submitted ? (
              <div>
                <p className="thanking">
                  Thanks! We will let you know if we get enough interest to
                  launch, in the meantime please share with friends.
                </p>
                <div className="sharing">
                  <a href="mailto:?&subject=Check out the Rocket Fleece!&body=Hey,%0A%0ACheck%20out%20this%20fleece%20I%20found%3A%0Alink%20goes%20here%0A">
                    <EmailIcon />
                  </a>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//charlesscheuer.github.io/rocket-git/%23/fleece">
                    <FacebookIcon />
                  </a>
                  <a href="https://twitter.com/home?status=Check%20out%20this%20new%20non-profit%20fleece%20that%20is%20trying%20to%20restore%20Mongolian%20grasslands!%20link">
                    <TwitterIcon />
                  </a>
                </div>
                <button
                  type="button"
                  className="subscribeSubmit"
                  onClick={this.goBackHandler}
                >
                  Go back
                </button>
              </div>
            ) : (
              <div className="subscribe">
                <form action="#" className="form">
                  <div className="form__group">
                    <h1 className="thanking">
                      Get notified when the rocket launches:
                    </h1>

                    <input
                      type="email"
                      onChange={this.onEmailChange}
                      className="form__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      {label}
                    </label>
                  </div>
                </form>
                <button
                  type="button"
                  className="subscribeSubmit"
                  onClick={this.onSubmitEmail}
                >
                  Submit
                </button>
              </div>
            )}
          </div>
          <img
            className="bottom__name"
            src={rocketTitle}
            alt="rocket apparel"
          />
          <img className="bottom__logo" src={rocketLogo} alt="rocket logo" />
        </div>
      </div>
    );
  }
}

// <div className="footLinks">
//           <ul className="nav">
//             <li className="nav__item">
//               <Link to="/" className="nav__link btn">
//                 Home
//               </Link>
//             </li>
//             <li className="nav__item">
//               <Link to="/fleece" className="nav__link btn">
//                 Fleece
//               </Link>
//             </li>
//             <li className="nav__item">
//               <a className="nav__link btn" href={`mailto:${myEmail}`}>
//                 Contact
//               </a>
//             </li>
//             <li className="nav__item">
//               <a className="nav__link btn" href={`mailto:${myEmail}`}>
//                 Send Feedback
//               </a>
//             </li>
//             <li className="nav__item">
//               <Link to="/Our-story" className="nav__link btn">
//                 Our Story
//               </Link>
//             </li>
//           </ul>
//         </div>
