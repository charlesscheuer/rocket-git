import React, { Component } from 'react'
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ArrowLeft extends Component {
  render() {
    return (
      <FontAwesomeIcon icon={faArrowCircleRight}/>
    )
  }
}
