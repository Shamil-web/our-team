import React from "react";
import "./Header.scss";
export const Header = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">Наша команда</h1>
        <p className="header-text">это команда опытных разработчиков</p>
        <button className="header-button">Выход</button>
      </header>
    </div>
  );
};
