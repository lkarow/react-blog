import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function navbar({ isAuth, signIn, logOut }) {
  return (
    <nav className="navbar" role="navigation">
      <ul className="nav">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        {isAuth && (
          <li>
            <Link to="/create" className="navbar-links">
              Create post
            </Link>
          </li>
        )}
      </ul>
      {!isAuth ? (
        <button className="btn-login" onClick={signIn}>
          Login
        </button>
      ) : (
        <button className="btn-login" onClick={logOut}>
          Logout
        </button>
      )}
    </nav>
  );
}
