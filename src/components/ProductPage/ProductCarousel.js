import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import fleeceImg from '..2/src/img/fleece-img-1.JPG';
import fleeceImg2 from '..2/src/img/fleece-img-2.JPG';

export default class ProductCarousel extends Component {
  render() {
    return (
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fleeceImg}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Comfortable fleece</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fleeceImg2}
          alt="second slide"
        />

        <Carousel.Caption>
          <h3>Rocket apparel</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={fleeceImg}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Keeps you warm</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
  }
}
