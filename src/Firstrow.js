import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class Firstrow extends Component {

  static propTypes = {
    setCampers: PropTypes.func.isRequired
  }

  setAllTime = () =>
    this.props.setCampers("alltime");

  setRecent = () =>
    this.props.setCampers("recent");

  render() {
    return(
      <div className="first-row">  
        <div className="camper even row the-first-row">
          <div className="camper-index camper-inner text-center">
            #
          </div>
          <div className="camper-name camper-inner">
            Camper Name
          </div>
          <div className="camper-recent camper-inner text-center">
            <a onClick={this.setRecent}>Points in past 30 days</a>
          </div>
          <div className="camper-alltime text-center">
            <a onClick={this.setAllTime}>All time points</a>
          </div>
        </div>
      </div>
    );
  }

}