import React from "react";
import "./Card.scss";

const Card = (props) => {
  console.log(props);

  return (
    <div className="container">
      <div className="card">
        <img className="user-img" src={props.item.avatar} alt="ben" />
        <p className="user-name">
          {props.item.first_name} {props.item.last_name}
        </p>
      </div>
    </div>
  );
};

export default Card;
