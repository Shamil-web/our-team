import React from "react";
import { Header } from "../components/header/Header.tsx";
import Card from "../components/card/Card.tsx";
import { useGetUsers } from "../hooks/useGetUsers.ts";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  avatar: string;
  first_name: string;
  last_name: string;
}

export const Main = () => {
  const { users } = useGetUsers();

  return (
    <>
      <Header />
      <div className="employees">
        {users ? (
          users.map((user: User) => (
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
