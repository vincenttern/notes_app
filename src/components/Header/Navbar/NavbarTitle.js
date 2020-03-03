import React from "react";
import { Link } from "react-router-dom";

export default function NavbarTitle() {
  return (
    <div className="header__title--container">
      <Link to="/" className="header__title">
        <p className="brand">NoteBeast</p>
      </Link>
    </div>
  );
}
