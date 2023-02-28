import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Products from "./Products";
function NavigationBar(props) {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/products">
          {" "}
          <b>MyStore</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/products"
              className="nav-link"
              activeClassName="active"
            >
              Produits
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br></br>
    </>
  );
}

export default NavigationBar;
