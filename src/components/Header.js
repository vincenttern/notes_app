import React from "react";

const headerapp = {
  color: "#fea49f",
  backgroundColor: "#101357",
  height: 50
};

const titleApp = {
  textAlign: "center",
  margin: 0,
  paddingTop: 10
};

const Header = () => {
  return (
    <header style={headerapp}>
      <h2 style={titleApp}>Noted</h2>
    </header>
  );
};

export default Header;
