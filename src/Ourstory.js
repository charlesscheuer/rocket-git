import React, { Component } from 'react';
import ourStory from '../src/img/Our story@2x.png';
import ourStoryBook from '../src/img/ourStoryBook.png';

export default class Ourstory extends Component {
  render() {
    return (
      <div className="ourStory">
        <div className="ourStory__centered">
          <img src={ourStory} alt="Logo name says rocket apparel" className="ourStory__head"/>
        </div>
        <div className="ourStory__centered">
          <img src={ourStoryBook} alt="Logo" className="ourStory__icon"/>
        </div>
      </div>
    )
  }
}