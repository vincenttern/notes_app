import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const routePaths = [
  { path: "/", name: "Home" },
  { path: "/contact", name: "Contact" }
];

export default function Navbar() {
  return (
    <Menu width={"50%"}>
      {routePaths.map(({ path, name }) => {
        return (
          <Link to={path} className="menu-item" key={name}>
            {name}
          </Link>
        );
      })}
    </Menu>
  );
}
