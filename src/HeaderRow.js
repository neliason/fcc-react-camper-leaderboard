import React, { Component } from 'react';
import PropTypes from "prop-types";

export default class HeaderRow extends Component {

  static propTypes = {
    setCampers: PropTypes.func.isRequired,
    recentText: PropTypes.string.isRequired,
    alltimeText: PropTypes.string.isRequired
  }

  setAllTime = () =>
    this.props.setCampers("alltime");

  setRecent = () =>
    this.props.setCampers("recent");

  render() {
    return(
      <div className="header-row">  
        <div className="camper even row">
          <div className="camper-index camper-inner text-center">
            #
          </div>
          <div className="header-name camper-inner">
            Camper Name
          </div>
          <div className="camper-recent camper-inner text-center">
            <a onClick={this.setRecent}>{this.props.recentText}</a>
          </div>
          <div className="camper-alltime text-center">
            <a onClick={this.setAllTime}>{this.props.alltimeText}</a>
          </div>
        </div>
      </div>
    );
  }

}