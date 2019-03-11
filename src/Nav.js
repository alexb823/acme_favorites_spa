import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({numUsers, numThings}) => {
  return (
    <ul className="nav nav-pills my-3">
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/users">
          Users {numUsers}
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/things">
          Things {numThings}
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
