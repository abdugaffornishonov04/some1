import React, { Component } from "react";
// import { Link, a } from "react-router-dom";

import "../../styles/main.scss"
import cart from "../../assets/images/header-cart.png"
import { Link, NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <nav className="navbar">
              <ul>
                <li>
                  <NavLink className="navbar-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="/electronics">
                    Electronics
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="/jewelery">
                    Jewelery
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="/menspage">
                    Men's clothing
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar-link" to="/womenspage">
                    Women's clothing
                  </NavLink>
                </li>
              </ul>
            </nav>
            <div className="header-end-wrapper">
              <Form.Select
                className="header-select bg-warning text-black p-2"
                aria-label="Default select example"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Link to="/cartpage" className="header-cart-wrapper">
                <img src={cart} alt="cart" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
