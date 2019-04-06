import React, { Component } from 'react';
import fleeceImg from '../src/img/fleece-img-1.JPG';
import fleeceImg2 from '../src/img/fleece-img-2.JPG';

export default class ProductCarousel extends Component {

  constructor() {
    super();
    this.state = {
      images: [ fleeceImg, fleeceImg2, fleeceImg, fleeceImg2, fleeceImg, fleeceImg2],
      count: 0
    }
  }

  imageNextHandler = () => {
    if (this.state.count < this.state.images.length -1) {
      let add = this.state.count +1;
      this.setState({count: add})
    }
    else {
      this.setState({count: 0})
    }
  }

  imagePrevHandler = () => {
    if (this.state.count > 0 ) {
      let minus = this.state.count -1;
      this.setState({count: minus})
    }
    else {
        this.setState({count: this.state.images.length -1})
    }
  }

  render() {
    return (
      <div className="productGallery">
      <div className="productGallery__others">
        <img src={fleeceImg} alt="a fleece" />
        <img src={fleeceImg2} alt="a fleece" />
        <img src={fleeceImg} alt="a fleece" />
        <img src={fleeceImg} alt="a fleece" />
        <img src={fleeceImg} alt="a fleece" />
      </div>
      <div className="productGallery__focused">
        <div className="arrows">
            <button onClick={this.imagePrevHandler} className="arrows_right">&larr; Prev</button>
            <button onClick={this.imageNextHandler} className="arrows_left">Next &rarr;</button>
        </div>
        <img src={this.state.images[this.state.count]} alt=" a fleece" />
      </div>
      </div>
    )
  }
}
