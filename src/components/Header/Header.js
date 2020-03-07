import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import NavbarBurgerMenu from "./Navbar/NavbarBurgerMenu";
import NavbarMain from "./Navbar/NavbarMain";
import NavbarTitle from "./Navbar/NavbarTitle";

class Header extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;
    return (
      <div id="header" className="header">
        <div className="header__container title">
          <NavbarBurgerMenu />
          <NavbarTitle />
        </div>
        <div className="header__container nav">
          <NavbarMain />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
