import React from "react";
// import "./style/NavBar.css";
import rick from "./rickhead.png";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={rick}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Rick-a-pedia
        </Navbar.Brand>
        <Nav className="">
          <LinkContainer className="item" to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer className="item" to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
