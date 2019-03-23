import React, { Component } from 'react'
import rocketLogo from '../src/img/rocket-02.png';
import rocketTitle from '../src/img/Rocket Apparel@2x.png';
import { route , link } from 'react-router-dom';
const email = 'charlesfscheuer@gmail.com';


export default class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ctrSub: '',
      submitted: false
    }
  }

  onEmailChange = (event) => {
    this.setState({ctrSub: event.target.value})
  }

  onSubmitEmail = () => {
    console.log(this.state.ctrSub)
    // in the future this will submit the value to the database
    this.setState({submitted: true})
  }

  render() {
    return (
      <div className="footer">
      <div className="footLinks">
      <ul className="nav">
      <li className="nav__item"><p href="#" onClick={() => this.props.ctaRouteChange('Abovefold')} className="nav__link btn">Home</p></li>
      <li className="nav__item"><p href="#" onClick={() => this.props.ctaRouteChange('Fleece')} className="nav__link btn">Fleece</p></li>
      <li className="nav__item"><a className="nav__link btn" href={`mailto:${email}`}>Contact</a></li>
      <li className="nav__item"><a className="nav__link btn" href={`mailto:${email}`}>Send Feedback</a></li>
      <li className="nav__item"><p href="#" className="nav__link btn" onClick={() => this.props.ctaRouteChange('Ourstory')}>Our Story</p></li>
  </ul>
      </div>
        
        <div className="bottom">
        <div className="bottom__form">
        {this.state.submitted ? <p className="thanking">Thanks for subscribing!</p>
           : <div className="subscribe">
           <form action="#" class="form">
             <div className="form__group">
               <h1 className="thanking">Add your email to join our mailing list:</h1>
               <input type="email" className="form__input" placeholder="Email address" id="email" required />
               <label htmlFor="email" className="form__label">Email address</label>
             </div>
           </form>
          <p className="subscribeSubmit" onClick={this.onSubmitEmail}>Submit</p> 
   </div>}
        </div>
          <img className="bottom__name" src={rocketTitle} alt="rocket apparel"/>
          <img className="bottom__logo" src={rocketLogo} alt="rocket logo"/>
        </div>
      </div>
    );
  }
}

