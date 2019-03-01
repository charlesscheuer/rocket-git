import React, { Component } from 'react'

export default class FormCollect extends Component {
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
        <div className="ctr">
        <p className="outOfStock">Sorry, but we are out of stock right now. Add your email to be notified when we replenish our inventory.</p>
        <div className="ctr__email">
        <form action="#" class="form">
                  <div className="form__group">
                    <input type="email" onChange={this.onEmailChange} className="form__input" placeholder="Email address" id="email" required />
                    <label htmlFor="email" className="form__label">Enter email address</label>
                  </div>
        </form>
        </div>
        <div className="purchase" onClick={this.onSubmitEmail}>Submit</div>
      </div>
      
    )
  }
}
