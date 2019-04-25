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
        <p>I'm a supply chain management and computer science student at Washington University in St. Louis. Though I'm only a sophomore, I'm eager to apply the things I have learned in school and create things that have real world value. </p>
        <p>
        I'm interested in increasing societal awareness of the impacts we have on our planet. In the past few months, I have been studying the ecological impacts of increased global demand for cashmere. It turns out that 70% of Mongolian grasslands are damaged to a degree. If you would like, you can read some of my research here or contact me to learn more. My vision is to create a series of products that expose ecological impacts of consumption and climate warming. The the purpose of the Rocket is to launch this non-profit product movement. All of the profit generated from these products will go directly to efforts that help prevent those ecological impacts. With the Rocket fleece, I would like to generate funds donate to and collaborate with Wildlife Conservation Society Mongolia to help them breed better goats and educate herders about overgrazing.
        </p>
        <p>If you share my vision for non-profit products that help solve ecological issues, please help me launch this rocket!</p>
      </div>
    )
  }
}