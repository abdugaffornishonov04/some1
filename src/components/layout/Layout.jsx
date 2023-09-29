import React, { Component, Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Outlet/>
      </Fragment>
    );
  }
}

export default Layout;
