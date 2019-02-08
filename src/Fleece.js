import React, { Component } from 'react';
import rocketFleece from '../src/img/The rocket fleece@2x.png';
import pullover from '../src/img/pullover.png';


export default class Fleece extends Component {
  render() {
    return (
      <div className="rocketFleece">
        <img src={rocketFleece} className="rocketFleece__head"/>
        <img src={pullover} className="rocketFleece__icon"/>
        <div className="productPage">
        <h1>Rocket Apparel Fleece</h1>
            <form action="#" className="form">
              <div className="form__group">
                <input type="email" class="form__input" placeholder="Email" id="email" required>
                </input>
                <label for="email" class="form__label">Email</label>
              </div>
            </form>
        </div>
      </div>
    )
  }
}