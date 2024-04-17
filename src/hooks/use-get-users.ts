import { useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  avatar: string;
  first_name: string;
  last_name: string;
};

const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
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

export default useGetUsers;
