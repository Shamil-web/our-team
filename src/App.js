import React, { useEffect, useState } from "react";
import Card from "./components/card/Card";
import { Header } from "./components/header/Header";

function App() {
  const [users, setUsers] = useState();
  const getUsers = () => {
    fetch("https://reqres.in/api/users?page1")
      .then((response) => response.json())
      .then((json) => setUsers(json.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Header />
      <div className="employees">
        {users ? (
          users.map((user) => <Card key={user.id} item={user} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <button className="list-btn">Показать еще</button>
    </div>
  );
}

export default App;
