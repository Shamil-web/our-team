import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
import { User } from "../../hooks/use-get-users";

type Props = {
  item: User;
};

const Card = (props: Props) => {
  return (
    <Link
      state={props.item}
      to={{
        pathname: `/profile/${props.item.id}`,
      }}
    >
      <div className="container">
        <div className="card">
          <img className="user-img" src={props.item.avatar} alt="ben" />
          <p className="user-name">
            {props.item.first_name} {props.item.last_name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
