import React from "react";
import PropTypes from "prop-types";

const Camper = props =>
  <div className={props.index % 2 === 0 ? "even camper row" : "odd camper row"}>
    <div className="camper-index camper-inner text-center">
      {props.index}
    </div>
    <div className="camper-name camper-inner">
      <img src={props.image} alt="Camper" width="40" height="40" className="camper-img"/>
      <a href={`https://www.freecodecamp.org/${props.username}`} target="#">{props.username}</a>
    </div>
    <div className="camper-recent camper-inner text-center">
      {props.recentPoints}
    </div>
    <div className="camper-alltime text-center">
      {props.alltimePoints}
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