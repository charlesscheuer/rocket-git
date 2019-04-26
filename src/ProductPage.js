import React, { Component } from 'react';
import ProductCarousel from './ProductCarousel';
import FormCollect from './FormCollect';
import wallGoon from './img/Fleece/wall-goon-01.jpg';
import fleeceLogo3 from './img/Fleece/logo-3-01.jpg';

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
      {/*<div className="goon">
        <img className="goon_img" src={wallGoon} />
        <p className="goon_paragraph">test</p>
        <img className="goon_img-2" src={fleeceLogo3} />
    </div> */}
      <div className="fleeceCTA">
      <div className="fleeceCTA_right">
      <p className="price">&#36;49.99</p>
      <p className="price_desc">Add your email to be notified if we make this product. We need at least 1,000 customers to launch the rocket and produce the fleece. If we never make the fleece, then you won't ever receive an email from us.</p>
      </div>
      <FormCollect />
      </div>
      <ProductCarousel className="carousel"/>
      </div> 
      </div>
    )
  }
}
