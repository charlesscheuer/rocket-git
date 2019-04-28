import React, { Component } from 'react';
import EmailIcon from './EmailIcon';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class FormCollect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ctrSub: '',
      submitted: false,
      label: 'Email address',
      count: '125'
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
    fetch('http://localhost:3000/count', {
      method: 'get',
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      if (data > 125) {
        this.setState({count: data})
      } else {
        this.setState({count: 125})
      }
    })
  }

  componentDidMount () {
    fetch('http://localhost:3000/count', {
      method: 'get',
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(data => {
      if (data > 125) {
        this.setState({count: data})
      } else {
        this.setState({count: 125})
      }
    })
  }

  render() {
    return (
        <div className="ctr">
        {this.state.submitted ? 
          <div> 
          <p className="ctr__confirm">Thanks! We will let you know if we get enough interest to launch, in the meantime please share with friends.</p> 
          <div className="sharing">
          <a href="mailto:?&subject=Check out the Rocket Fleece!&body=Hey,%0A%0ACheck%20out%20this%20fleece%20I%20found%3A%0Alink%20goes%20here%0A"><EmailIcon /></a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//charlesscheuer.github.io/rocket-git/%23/fleece"><FacebookIcon />
          </a>
          <a href="https://twitter.com/home?status=Check%20out%20this%20new%20non-profit%20fleece%20that%20is%20trying%20to%20restore%20Mongolian%20grasslands!%20link"><TwitterIcon />
          </a>
          </div>
          <button className="purchase" onClick={this.goBackHandler}>Go back</button> 
          </div>  : 
        <div>
        <h2>Join {this.state.count} others that are ready to launch!</h2>
        <div className="ctr__email">
        <form action="#" className="form">
                  <div className="form__group">
                    <input type="email" onChange={this.onEmailChange} className="form__input" placeholder="Email address" id="email" required />
                    <label htmlFor="email" className="form__label">{this.state.label}</label>
                  </div>
        </form>
        </div>
        <button className="purchase" onClick={this.onSubmitEmail}>Submit</button> 
        </div>}
      </div>
      
    )
  }
}
