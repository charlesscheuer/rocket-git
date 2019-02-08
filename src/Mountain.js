import React, { Component } from 'react';
import madeForThe from '../src/img/Made for the mountai@2x.png';
import mountainIcon from '../src/img/noun_Mountain_1375333@2x.png';

export default class Mountain extends Component {
  render() {
    return (
      <div className="mountain">
        <img src={madeForThe} className="mountain__head"/>
        <img src={mountainIcon} className="mountain__icon"/>
      </div>
    )
  }
}

