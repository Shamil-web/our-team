import React, { useEffect, useState } from "react";
import { Header } from "./components/home/header/Header";
import { Card } from "./components/home/card/Card";
import { EmployeeProfile } from "./components/profile/Profile";

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
      <EmployeeProfile />
      {/* <Header /> */}
      {/* <div className="employees">
        {users ? (
          users.map((user) => <Card key={user.id} item={user} />)
        ) : (
          <p>Loading...</p>
        )}
      </div> */}
      {/* <button className="list-btn">Показать еще</button> */}
    </div>
  );
}

export default App;
