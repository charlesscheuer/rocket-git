import React, { Component } from 'react';
import rocketFleece from '../src/img/The rocket fleece@2x.png';
import pullover from '../src/img/pullover.png';
import ProductPage from '../src/ProductPage';


export default class Fleece extends Component {

  render() {
    return (
      <div className="rocketFleece">
        <img src={rocketFleece} className="rocketFleece__head" alt="header label"/>
        <img src={pullover} className="rocketFleece__icon" alt="header icon"/>
        <div className="productPage">
        <h1>Rocket Apparel Fleece</h1> 
        <ProductPage/>
        </div>
      </div>
    )
  }
}