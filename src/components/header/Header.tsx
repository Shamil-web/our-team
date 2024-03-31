import React from "react";
import "./header.scss";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">Наша команда</h1>
        <p className="header-text">
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся <br />
          на их плечи, и умеющие находить выход из любых, даже самых сложных
          ситуаций.{" "}
        </p>
        <button className="header-button">Выход</button>
      </header>
    </div>
  );
};
