import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <header>
      <div></div>
      <div>Phonebook</div>
      <Navigation />
    </header>
  );
};

export default AppBar;
