import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

interface User {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  // Другие поля пользователя, если есть
}

interface CardProps {
  item: User;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="container">
      <div className="card">
        <Link
          state={props.item}
          to={{
            pathname: `/profile/${props.item.id}`,
          }}
        >
          <img className="user-img" src={props.item.avatar} alt="ben" />
        </Link>
        <p className="user-name">
          {props.item.first_name} {props.item.last_name}
        </p>
      </div>
    </div>
  );
};

export default Card;
