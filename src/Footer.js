import React, { Component } from 'react'
import rocketLogo from '../src/img/rocket-02.png';
const email = 'charlesfscheuer@gmail.com';

export default class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ctrSub: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({ctrSub: event.target.value})
  }

  onSubmitEmail = () => {
    console.log(this.state.ctrSub)
    // in the future this will submit the value to the database
  }

  render() {
    return (
      <div className="footer">
        <ul className="nav">
            <li className="nav__item"><p href="#" onClick={() => this.props.ctaRouteChange('Abovefold')} className="nav__link btn">Home</p></li>
            <li className="nav__item"><p href="#" onClick={() => this.props.ctaRouteChange('Fleece')} className="nav__link btn">Fleece</p></li>
            <li className="nav__item"><a className="nav__link btn" href={`mailto:${email}`}>Contact</a></li>
            <li className="nav__item"><a className="nav__link btn" href={`mailto:${email}`}>Send Feedback</a></li>
            <li className="nav__item"><p href="#" className="nav__link btn" onClick={() => this.props.ctaRouteChange('Ourstory')}>Our Story</p></li>
        </ul>
        <div className="footer__img">
            <img className="__logo" src={rocketLogo} alt="rocket logo"/>
        </div>
        
        <div className="subscribe">
                <form action="#" class="form">
                  <div className="form__group">
                    <input type="email" className="form__input" placeholder="Email address" id="email" required />
                    <label htmlFor="email" className="form__label">Email address</label>
                  </div>
                </form>
          <a className="subscribeSubmit" onClick={this.onSubmitEmail}>Submit</a> 
        </div>
      </div>
    );
  }
}

