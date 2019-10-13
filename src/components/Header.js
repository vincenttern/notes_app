import React from "react";
import headerStyles from "../styles/scss/Header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h2 className={headerStyles.title}>NoteBeast</h2>
    </header>
  );
};

export default Header;
