import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Input from './FooterViews/Input';
import Error from './FooterViews/Error';
import Success from './FooterViews/Success';
import rocketLogo from './img/rocket-svg-02.png';
import rocketTitle from './img/Rocket Apparel@2x.png';

ReactGA.initialize('UA-133410946-2');
// const myEmail = 'charlesfscheuer@gmail.com';

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ctrSub: '',
      submitted: false,
      label: 'Email address',
      error: false,
      input: true
    };
  }

  onEmailChange = event => {
    this.setState({ ctrSub: event.target.value });
  };

  onSubmitEmail = () => {
    const { ctrSub, submitted } = this.state;
    // / formerlly https://sleepy-lake-80658.herokuapp.com/register
    // need to add google cloud platform here
    if (regexp.test(ctrSub) && ctrSub.length > 1) {
      fetch('http://localhost:5555/addEmail', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email: ctrSub
        })
      })
        .then(response => {
          if (response.ok) {
            this.setState({ submitted: true, input: false });
          } else {
            ReactGA.event({
              category: 'FormSubmission',
              action: 'user submitted form with an error',
              storage: 'none'
            });
            this.setState({ submitted: false, input: false, error: true });
          }
        })
        .then(() => {
          if (submitted === true) {
            ReactGA.event({
              category: 'FormSubmission',
              action: 'user submitted form succesfully',
              storage: 'none'
            });
          }
        });
    } else {
      this.setState({
        label: 'Invalid email address, try again'
      });
    }
  };

  goBackHandler = () => {
    this.setState({ submitted: false, error: false, input: true });
  };

  render() {
    const { submitted, input, error, label } = this.state;
    return (
      <div className="footer">
        <div className="bottom">
          <div className="bottom__form">
            {submitted ? <Success goBack={this.goBackHandler} /> : null}
            {error ? <Error goBack={this.goBackHandler} /> : null}
            {input ? (
              <Input
                label={label}
                emailChange={this.onEmailChange}
                submit={this.onSubmitEmail}
              />
            ) : null}
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
