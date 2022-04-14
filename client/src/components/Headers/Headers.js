import React from 'react';
import {Nav,Container,Navbar,NavDropdown} from 'react-bootstrap';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom"; 
import"./Headers.css";
const Headers = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Tunisia-Home Real Stat</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="#action2">About Us</Nav.Link>
        <NavDropdown title="Location" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Appartement</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Maison & Villa</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Local Commercial & Bureau</NavDropdown.Item>
          <NavDropdown.Divider />
        
        </NavDropdown>
        <NavDropdown title="Vente" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Appartement</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Maison & Villa</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Local Commercial & Bureau</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        <div className="C-but">
        <Button component={Link} to={{ pathname: "/signin" }} color="inherit">
            SignIn
          </Button>

          <Button component={Link} to={{ pathname: "/signup" }} color="inherit">
            SingUp
          </Button>
          </div>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Headers