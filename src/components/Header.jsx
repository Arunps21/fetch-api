import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; // Import the specific icon

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faCartShopping} style={{ color: "#fafafa", marginRight: "10px" }} className="fs-1"/>
            <strong className="fs-1">E-Commerce App</strong>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#features" className="text-light">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-light">
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
