import React, { Component } from 'react'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ArrowLeft extends Component {
  render() {
    return (
      <FontAwesomeIcon icon={faArrowRight}/>
    )
  }
}
