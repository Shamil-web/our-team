import { useEffect, useState } from "react";

export const useGetUsers = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://reqres.in/api/users?page1")
      .then((response) => response.json())
      .then((obj) => setUsers(obj.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { users };
};
