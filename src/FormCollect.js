import React, { Component } from 'react'

export default class FormCollect extends Component {
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
    this.setState({submitted: true})
    // in the future this will submit the value to the database
  }

  render() {
    return (
        <div className="ctr">
        {this.state.submitted ? <p className="ctr__confirm">Thanks for subscribing! We will let you know if we get enough interest to produce the product.</p> : 
        <div>
        <div className="ctr__email">
        <form action="#" class="form">
                  <div className="form__group">
                    <input type="email" onChange={this.onEmailChange} className="form__input" placeholder="Email address" id="email" required />
                    <label htmlFor="email" className="form__label">Enter email address</label>
                  </div>
        </form>
        </div>
        <div className="purchase" onClick={this.onSubmitEmail}>Submit</div> 
        </div>}
        
      </div>
      
    )
  }
}
