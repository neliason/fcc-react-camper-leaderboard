import React from "react";
import PropTypes from "prop-types";

const Camper = props =>
  <div className={props.index % 2 === 0 ? "even camper row" : "odd camper row"}>
    <div className="camper-inner text-center">
      <div className="camper-index camper-inner-inner">
        {props.index}
      </div>
    </div>
    <div className="camper-inner">
      <div className="camper-name camper-inner-inner">
        <img src={props.image} alt="Camper" width="40" height="40" className="camper-img"/>
        <a href={`https://www.freecodecamp.org/${props.username}`} target="#">{props.username}</a>
      </div>
    </div>
    <div className="camper-inner text-center">
      <div className="camper-recent camper-inner-inner">
        {props.recentPoints}
      </div>
    </div>
    <div className="text-center">
      <div className="camper-alltime camper-inner-inner">
        {props.alltimePoints}
      </div>
    </div>
  </div>

Camper.propTypes = {
  username: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recentPoints: PropTypes.number.isRequired,
  alltimePoints: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}

export default Camper;