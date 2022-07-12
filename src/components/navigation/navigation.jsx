import WindLogo from "../../images/logo.png";
import SearchBar from "../search-bar/search-bar";
import "./navigation.scss";
import React from "react";

const Navigation = () => {
  return (
    <header className="nav-header">
      <nav>
        <img src={WindLogo} alt="" />
        <SearchBar />
      </nav>
    </header>
  );
};

export default Navigation;
