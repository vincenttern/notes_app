import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const routePaths = [
  { path: "/", name: "Home" },
  { path: "/contact", name: "Contact" }
];

export default function NavbarMain() {
  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
  });

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      navEl = document.getElementById("main-menu"),
      navLinks = document.getElementsByClassName("menu__link");

    if (distanceY > shrinkOn) {
      navEl.classList.add("resize");
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add("resize");
      }
    } else {
      navEl.classList.remove("resize");
      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove("resize");
      }
    }
  };

  return (
    <nav id="main-menu" className="menu">
      <ul className="menu__ul">
        {routePaths.map(({ path, name }) => {
          return (
            <li key={name} className="menu__li">
              <Link to={path} id="nav-links" className="menu__link">
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
