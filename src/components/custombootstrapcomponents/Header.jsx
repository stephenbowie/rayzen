import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";
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
            <NavDropdown title="Transaction" id="basic-nav-dropdown">
              <NavDropdown.Item href="/TransactionList">
                Transaction List
              </NavDropdown.Item>
              <NavDropdown.Item href="/transactionupload">
                Upload File
              </NavDropdown.Item>
            </NavDropdown>
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
