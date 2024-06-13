import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand href="#home">DreamJournal</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#previous-entries">Previous Entries</Nav.Link>
        <Nav.Link href="#edit-current-entry">Edit Current Entry</Nav.Link>
        <Nav.Link href="#log-out">Log Out</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Header;

