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
            <li className="featureList__item">built for cold weather</li>
            <li className="featureList__item">super soft wool material</li>
            <li className="featureList__item">comfortable, but built to last</li>
          </ul>
          
        </div>
        <div className="sustain">
          <img src={supplyHead} alt="Sustainable Supply Chain" className="sustain__header" />
          <img src={supplyIcon} alt="icon of hand" className="sustain__icon" />
          <ul className="featureList">
            <li className="featureList__item">built for cold weather</li>
            <li className="featureList__item">super soft wool material</li>
            <li className="featureList__item">comfortable, but built to last</li>
          </ul>
        </div>
        
      </div>
      
    )
  }
}

