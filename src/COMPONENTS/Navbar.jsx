import React from "react";
// import backimg from '../../src/assets/shopping-bag.png'
import CartButton from "../COMPONENTS/cartbutton.jsx";
import '../App.css'
import { Link,NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-black">
      <div className="container-fluid ">
        <a className="navbar-brand text-light " href="/">
          Shopper
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <a
                className="nav-link active text-white"
                href="/Home"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown mx-3 " id="categories">
              <a
                className="nav-link dropdown-toggle text-light"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu text-light">
                <li>
                  <a className="dropdown-item" href="/All">
                    All
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Wfas">
                    women's wear
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Mfas">
                    men's wear
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/Accessories">
                    accessories
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="input-group rounded w-50 position fixed mx-auto">
            <form className="d-flex" role="search"  />
            <input type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              describedby="search-addon"
              id="hill"
            />
          </div>
          <div className="mx-auto"> <CartButton/>  </div>
        </div>
      </div>
    </nav>
  );
}
