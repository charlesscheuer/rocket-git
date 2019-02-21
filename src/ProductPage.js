import React, { Component } from 'react';
import ProductCarousel from './ProductCarousel';
import FormCollect from './FormCollect';
import { Select } from 'evergreen-ui';


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
      <Select className="size">
          <option value="Small">Small</option>
          <option value="Medium" checked>Medium</option>
          <option value="Large">Large</option>
      </Select>
      <div className="purchase" onClick={this.bought}>Buy now</div>
      </div> }
      
      </div>
    )
  }
}
