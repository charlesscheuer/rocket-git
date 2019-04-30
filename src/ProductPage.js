import React from 'react';
import ProductCarousel from './ProductCarousel';
import FormCollect from './FormCollect';
import RocketIcon from './RocketIcon';

const ProductPage = () => {
  return (
    <div>
      <div className="beforeBought">
        {/* <div className="goon">
        <img className="goon_img" src={wallGoon} />
        <p className="goon_paragraph">test</p>
        <img className="goon_img-2" src={fleeceLogo3} />
    </div> */}
        <div className="fleeceCTA">
          <div className="fleeceCTA_right">
            <RocketIcon />
            <p className="price">
              <s className="price_sale">&#36;59.99</s> &#36;49.99
            </p>
            <p className="price_desc">
              Our early adopters will get the fleece for $10 less. Add your
              email to be notified when the rocket launches.
            </p>
          </div>
          <FormCollect />
        </div>
        <ProductCarousel className="carousel" />
      </div>
    </div>
  );
};

export default ProductPage;
