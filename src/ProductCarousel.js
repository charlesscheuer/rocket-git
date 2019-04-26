import React, { Component } from 'react';

import lookBook from './img/Fleece/lookbook-01.jpg';
import lookBook2 from './img/Fleece/lookbook-2-01.png';
import standingBridge from './img/Fleece/standing-bridge-2-01.jpg';
import standingBridge2 from './img/Fleece/standing-bridge-1-01.jpg';
import anotherBridge from './img/Fleece/standing-bridge-01.jpg';
import smilingWall from './img/Fleece/smiling-wall-01.png';
import behindWall from './img/Fleece/behind-wall-01.jpg';
import standingTree from './img/Fleece/standing-tree-01.jpg';
import standingTogether from './img/Fleece/standing-together-01.jpg';
import sittingSteps from './img/Fleece/sitting-steps-01.jpg';
import flowers from './img/Fleece/flowers-01.jpg';
import standingAnother from './img/Fleece/standing-2-01.jpg';
import standing3 from './img/Fleece/standing-01.jpg';
import girl from './img/Fleece/DSC_0367-01.jpg';
import sittingHill from './img/Fleece/sitting-hill-01.jpg';
import imgUno from './img/Fleece/1-01.jpg';
import girlLooksLeft from './img/Fleece/looking-left-girl-01.jpg';
import girlOnBridge from './img/Fleece/bridge-girl-01.jpg';
import girlOnBridge2 from './img/Fleece/bridge-girl-2-01.jpg';
import girlSitting from './img/Fleece/girl-sitting-01.jpg';
import girlStands from './img/Fleece/girl-standing-01.jpg';
import girlStandsBridge from './img/Fleece/girl-standing-bridge-01.jpg';
import fleeceLogo from './img/Fleece/logo-on-fleece-01.jpg';
import fleeceLogo2 from './img/Fleece/logo-2-01.jpg';
import fleeceLogo3 from './img/Fleece/logo-3-01.jpg';
import girlFleece from './img/Fleece/girl-in-fleece-01.jpg';
import fromBehind from './img/Fleece/from-behind-01.jpg';
import sittingWall2 from './img/Fleece/sitting-wall-01.jpg';
import wallGoon from './img/Fleece/wall-goon-01.jpg';
import wallSerious from './img/Fleece/wall-serious-01.jpg';
import wallGoon2 from './img/Fleece/wall-goon-2-01.jpg';


export default class ProductCarousel extends Component {

  constructor() {
    super();
    this.state = {
      images: [fleeceLogo, fleeceLogo3, fleeceLogo2, lookBook, lookBook2,
               standingBridge, standingBridge2, sittingWall2, wallGoon, wallGoon2, wallSerious,
              anotherBridge, smilingWall, behindWall, standingTree, standingTogether, sittingSteps,
              flowers, standingAnother, standing3, girl, sittingHill, imgUno, girlLooksLeft, girlOnBridge,
              girlOnBridge2, girlSitting, girlStands, girlStandsBridge, girlFleece, fromBehind
              ],
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

  imageFocusedChanger = (i) => {
    this.setState({count: i})
  }
  // add an onClick function to make the main image change onClick
  render() {
    return (
      <div className="productGallery_container">
      <div className="productGallery">
      <div className="productGallery__others">
        {this.state.images.map((image, i) => <img src={image} alt='the rocket fleece' onClick={() => this.imageFocusedChanger(i)} />)}
      </div>
      <div className="productGallery__focused">
        <div className="arrows">
            <button onClick={this.imagePrevHandler} className="arrows_right">&larr; Prev</button>
            <button onClick={this.imageNextHandler} className="arrows_left">Next &rarr;</button>
        </div>
        <img src={this.state.images[this.state.count]} alt=" a fleece" />
      </div>
      </div>
      </div>
    )
  }
}
