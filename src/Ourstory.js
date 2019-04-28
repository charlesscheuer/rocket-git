import React, { Component } from 'react';
import ourStory from '../src/img/Our story@2x.png';
import ourStoryBook from '../src/img/ourStoryBook.png';
import RocketIcon from './RocketIcon';

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
        <p>The Rocket is launching a non-profit product movement.</p>
        <p>
        Our mission is to create products
         that expose ecological impacts of consumption and solve global issues.
         All of the profits will go directly to efforts that prevent negative 
         ecological impacts. With the Rocket fleece, we will donate to
          and collaborate with Wildlife Conservation Society Mongolia
           to help herders learn about the issues of overgrazing and breed better goats. 
        </p>
        <p>In the past few months, we studied the ecological impacts of increased global
        demand for cashmere. It turns out that 70% of Mongolian grasslands are damaged to a degree. 
        If you would like, you can read some of the research here or contact us to learn more.</p>
        <p className="icon"><RocketIcon /></p>
      </div>
    )
  }
}