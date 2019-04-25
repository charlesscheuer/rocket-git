import React, { Component } from 'react';
import madeForThe from '../src/img/Made for the mountai@2x.png';
import mountainIcon from '../src/img/noun_Mountain_1375333@2x.png';
import supplyHead from '../src/img/Sustainable Supply c@2x.png';
import supplyIcon from '../src/img/sustainable-icon.png';

export default class Mountain extends Component {
  render() {
    return (
      <div className="productinfo">
      <div className="mountain">
          <img src={madeForThe} alt="Page" className="mountain__head"/>
          <img src={mountainIcon} alt="icon of mountain" className="mountain__icon"/>
          <ul className="featureList">
            <li className="featureList__item">Cozy sherpa fleece material</li>
            <li className="featureList__item">Keeps you warm through the winter</li>
            <li className="featureList__item">Comfortable, but built to last</li>
          </ul>
          
        </div>
        <div className="sustain">
          <img src={supplyHead} alt="Sustainable Supply Chain" className="sustain__header" />
          <img src={supplyIcon} alt="icon of hand" className="sustain__icon" />
          <ul className="featureList">
            <li className="featureList__item">Supplied with sustainability in mind</li>
            <li className="featureList__item">Helps restore Mongolian Grasslands</li>
            <li className="featureList__item">Non-profit product, all benefits go to charity</li>
          </ul>
        </div>
        
      </div>
      
    )
  }
}

