import React, { Component } from 'react';
import ourStory from '../src/img/Our story@2x.png';
import ourStoryBook from '../src/img/ourStoryBook.png';

export default class Ourstory extends Component {
  render() {
    return (
      <div className="ourStory" >
        <img src={ourStory} className="ourStory__head"/>
        <img src={ourStoryBook} className="ourStory__icon"/>
      </div>
    )
  }
}