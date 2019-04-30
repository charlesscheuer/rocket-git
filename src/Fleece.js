import React from 'react';
import rocketFleece from './img/The rocket fleece@2x.png';
import pullover from './img/pullover.png';
import ProductPage from './ProductPage';
import Mountain from './Mountain';
import embroideredLogo from './img/Fleece/logo-3-01.jpg';
import wallGoon from './img/Fleece/wall-goon-01.jpg';

const Fleece = () => {
  return (
    <div className="rocketFleece">
      <div className="top_centered">
        <img src={rocketFleece} className="rocketFleece__head" alt="header" />
      </div>
      <div className="top_centered">
        <img src={pullover} className="rocketFleece__icon" alt="header icon" />
      </div>

      <div className="productInfo">
        <div className="productInfo_container">
          <p>
            This is the Rocket Fleece. A comfortable, yet affordable, fleece.
            The Rocket is part of a non-profit project to raise funds to
            preserve and restore earth's overlooked treasures. In this case,
            Mongolian grasslands.
          </p>
          <div className="productInfo_container_img">
            <img
              className="embroidered"
              src={wallGoon}
              alt="embroidered logo"
            />
          </div>
        </div>
      </div>

      <div className="productInfo2">
        <div className="productInfo2_container">
          <div className="productInfo2_container_img">
            <img
              className="embroidered"
              src={embroideredLogo}
              alt="embroidered logo"
            />
          </div>
          <p>
            Ready to launch the Rocket? If so, add your email below to be
            notified when we launch. Not ready to blast off? Read more about{' '}
            <a href="https://charlesscheuer.github.io/rocket-git/#/our-story">
              our story
            </a>{' '}
            and why we want to restore Mongolia's grasslands{' '}
            <a
              href="https://medium.com/@charlieschr/wool-research-ddcca8036458"
              target="blank"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>

      <div className="productPage">
        <ProductPage />
      </div>

      <Mountain />
    </div>
  );
};
export default Fleece;
