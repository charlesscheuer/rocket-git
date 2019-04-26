import React, { Component } from 'react'
import rocketLogo from '../src/img/rocket-svg-02.png';
import rocketTitle from '../src/img/Rocket Apparel@2x.png';
import { Link } from 'react-router-dom';
const myEmail = 'charlesfscheuer@gmail.com';


const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ctrSub: '',
      submitted: false,
      label: 'Email address'
    }
  }

  onEmailChange = (event) => {
    this.setState({ctrSub: event.target.value})
  }

  onSubmitEmail = () => {
    if (regexp.test(this.state.ctrSub) && (this.state.ctrSub.length > 1)) {
      fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.ctrSub
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data === "success") {
        this.setState({submitted: true})
      } 
    })
    .catch(error => console.log(error))
    } 
    else {
      this.setState({
        label: "Invalid email address, try again"
      })
    }
  }

  goBackHandler = () => {
    this.setState({submitted: false})
  }

  render() {
    
    return (
      <div className="footer">
      <div className="footLinks">
      <ul className="nav">
      <li className="nav__item"><Link to="/" className="nav__link btn">Home</Link></li>
      <li className="nav__item"><Link to="/fleece" className="nav__link btn">Fleece</Link></li>
      <li className="nav__item"><a className="nav__link btn" href={`mailto:${myEmail}`}>Contact</a></li>
      <li className="nav__item"><a className="nav__link btn" href={`mailto:${myEmail}`}>Send Feedback</a></li>
      <li className="nav__item"><Link to="/Our-story" className="nav__link btn">Our Story</Link></li>
  </ul>
      </div>
        
        <div className="bottom">
        <div className="bottom__form">
        {this.state.submitted ? <div> <p className="thanking">Thanks for subscribing!</p> <button className="subscribeSubmit" onClick={this.goBackHandler}>Go back</button> </div>
           : <div className="subscribe">
           <form action="#" className="form">
             <div className="form__group">
               <h1 className="thanking">Get notified when the rocket launches:</h1>
               <input type="email" onChange={this.onEmailChange} className="form__input" placeholder="Email address" id="email" required />
               <label htmlFor="email" className="form__label">{this.state.label}</label>
             </div>
           </form>
          <button className="subscribeSubmit" onClick={this.onSubmitEmail}>Submit</button> 
   </div>}
        </div>
          <img className="bottom__name" src={rocketTitle} alt="rocket apparel"/>
          <img className="bottom__logo" src={rocketLogo} alt="rocket logo"/>
        </div>
    </div>
    );
  }
}

