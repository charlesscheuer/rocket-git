import React, { Component } from 'react'

export default class FormCollect extends Component {
  render() {
    return (
        <form action="#" className="form">
        <p className="outOfStock">Sorry, but we are out of stock right now. Add your email to be notified when we replenish our inventory.</p>
        <div className="form__group">
          <input type="email" class="form__input" placeholder="Email" id="email" required>
          </input>
          <label for="email" class="form__label">Email</label>
        </div>
        <div className="purchase">Submit</div>
      </form>
      
    )
  }
}
