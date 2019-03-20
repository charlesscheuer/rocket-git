import React, { Component } from 'react';
import fleeceImg from '../src/img/fleece-img-1.JPG';
import fleeceImg2 from '../src/img/fleece-img-2.JPG';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';


export default class ProductCarousel extends Component {
  render() {
    return (
      <div className="productGallery">
      <div className="productGallery__others">
        <img src={fleeceImg} alt="image of a fleece" />
        <img src={fleeceImg2} alt="image of a fleece" />
        <img src={fleeceImg} alt="image of a fleece" />
        <img src={fleeceImg} alt="image of a fleece" />
        <img src={fleeceImg} alt="image of a fleece" />
      </div>
      <div className="productGallery__focused">
        <div className="arrows">
            <ArrowLeft className="arrows__icon"/>
            <ArrowRight className="arrows__icon"/>
        </div>
        <img src={fleeceImg} alt="image of a fleece" />
      </div>
      </div>
    )
  }
}
