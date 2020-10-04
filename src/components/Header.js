import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/" activeClassName="is-active">
      Go home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Go to Create Page
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Go to help Page
    </NavLink>
  </header>
);

export default Header;
