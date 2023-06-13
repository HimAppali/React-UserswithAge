import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // applying 2 classes one from card module and another from adduser where we are using Card
    <div className={`${classes["card-container"]} ${props.className}`}>
      {props.children}
    </div>
  );
};
export default Card;
