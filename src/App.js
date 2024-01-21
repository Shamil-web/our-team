import React from "react";
import Card from "./components/card/Card";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
