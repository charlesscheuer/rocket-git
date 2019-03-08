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

  render() {
    return (
      <div>
      <div className="beforeBought">
      <ProductCarousel className="carousel"/>
      <div className="fleeceCTA">
      <div className="fleeceCTA_right">
      <p className="price">&#36;45.99</p>
      <p className="price_desc">Add your email to be notified if we make this product. We need at least 1,000 customers to produce the fleece. We hate spam too; if we never make the fleece then you won't ever receive an email from us.</p>
      </div>
      <FormCollect />
      </div>
      </div> 
      </div>
    )
  }
}
