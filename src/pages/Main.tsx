import React from "react";
import { Header } from "../components/header/header.tsx";
import Card from "../components/card/card.tsx";
import { useGetUsers } from "../hooks/use-get-users.ts";
import { Link } from "react-router-dom";

export const Main = () => {
  const { users } = useGetUsers();

  return (
    <>
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
    </>
  );
};
