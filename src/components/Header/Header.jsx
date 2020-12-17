import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from "./Login/Login";
import UserMenu from "./UserMenu";
import withUser from "../HOC/withUser";

class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                <span>the movie db</span>
              </Link>
            </li>
          </ul>
          {user ? <UserMenu /> : <Login />}
        </div>
      </nav>
    );
  }
}

export default withUser(Header);
