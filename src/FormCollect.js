import React, { Component } from 'react'

const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class FormCollect extends Component {
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
        <div className="ctr">
        {this.state.submitted ? <div> <p className="ctr__confirm">Thanks for subscribing! We will let you know if we get enough interest to produce the product.</p> <button className="purchase" onClick={this.goBackHandler}>Go back</button> </div>  : 
        <div>
        <h2>Join 12 others that are ready to launch the rocket!</h2>
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
