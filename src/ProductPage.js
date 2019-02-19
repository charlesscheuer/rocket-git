import React, { Component } from 'react';
import ProductCarousel from './ProductCarousel';
import FormCollect from './FormCollect';


export default class ProductPage extends Component {

    constructor() {
        super();
        this.state = {
          bought: false
        }
      }

    bought = () => {
        this.setState(({ bought }) => ({
          bought: !bought
      }));
    }

  render() {
    return (
      <div>
      {this.state.bought ? <FormCollect/> : <div className="beforeBought">
      <ProductCarousel/>
      <p className="price">&#36;45.99</p>
      <div className="purchase" onClick={this.bought}>Buy now</div>
      </div> }
      </div>
    )
  }
}
