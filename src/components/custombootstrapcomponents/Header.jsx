import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./Header.css";

export const Header = props => {
  return (
    <div className="headerHeader">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Raizen Consultancy Phils Inc.,</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/transaction">Transaction</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
