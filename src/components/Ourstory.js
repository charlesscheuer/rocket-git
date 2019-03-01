import React, { Component } from 'react';
import ourStory from '../img/Our story@2x.png';
import ourStoryBook from '../img/ourStoryBook.png';

export default class Ourstory extends Component {
  render() {
    return (
      <div className="ourStory" >
        <img src={ourStory} alt="Logo name says rocket apparel" className="ourStory__head"/>
        <img src={ourStoryBook} alt="Logo" className="ourStory__icon"/>
      </div>
    )
  }
}