import React from "react";
import { Header } from "../components/home/header/Header";
import { Card } from "../components/home/card/Card";
import { useGetUsers } from "../hooks/useGetUsers";
import { Link } from "react-router-dom";

export const Main = () => {
  const { users } = useGetUsers();

  return (
    <div>
      <Header />
      <div className="employees">
        {users ? (
          users.map((user) => (
            <Link key={user.id} to={`/profile/${user.id}`}>
              <Card item={user} />
            </Link>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>{" "}
      <button>Показать еще</button>
    </div>
  );
};
