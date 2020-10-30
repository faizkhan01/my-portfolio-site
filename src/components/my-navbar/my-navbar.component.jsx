import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../../assets/icons/logow.webp";
import "./my-navbar.styles.css";
import Button from "react-bootstrap/Button";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        fixed="top"
        variant="dark"
        expand="md"
        className="animate-navbar nav-theme justify-content-between"
      >
        <div>
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#experience">Blogs</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>             
              <a href="https://drive.google.com/file/d/1kHIIx_WXzQDz3JX6P8NSBVLAwZmiwPur/view?usp=sharing" download>
                      <Button className="m-2" variant="primary">
                        Resume
                      </Button>
              </a>
                  
            </Nav>
          </Navbar>
        </div>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
