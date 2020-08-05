import React from "react";
import './Character.css';

const Character = (props) => {
  return (
    <div className="Character">
      <div>{props.name} - {props.gender}</div>
      <p>{props.species}</p>
      <p>Status: {props.status}</p>
      <p>Origins: {props.origins}</p>
      <img src={props.image} alt="img" />
    </div>
  );
};

export default Character;