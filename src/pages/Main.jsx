import React from "react";
import { Header } from "../components/header/Header";
import { Card } from "../components/card/Card";
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
            <Link
              key={user.id}
              to={`/profile/${user.id}`}
              style={{ textDecoration: "none" }}
            >
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
