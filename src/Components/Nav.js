import React from "react";
import styled from "styled-components";
import {
  Nav,
  Navbar,
  ButtonToolbar,
  DropdownButton,
  Dropdown,
  NavItem,
} from "react-bootstrap";
import "../Components/nav.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./nav.css";

const Styles = styled.div`
.navbar{
    text-decoration: none;
    background-color: #3a3a43
    height: 5rem;
    font-size: 1.5rem;
    opacity: 0.6;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.navigation{
  display: flex
  
  @media(max-width: 700px){
    .navigation{
      display: flex
    }
  }
}




.nav-item .nav-link{
    margin-left: 5rem;
    color: white; 
    width: 100%;
    
    @media(max-width: 700px) {
      margin-left: 0;
      
    }
}
`;

export default function NavigationBar() {
  return (
    <Styles>
      <Navbar expand="md">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <div className='links-icons-container'> */}
        {/* <Navbar.Collapse> */}
        <div className="navigation">
          <Nav.Item>
            <Nav.Link href="/">HOME</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
              <Nav.Link href="/about">ABOUT</Nav.Link>
            </Nav.Item> */}
          <Nav.Item>
            <Nav.Link href="/projects">PROJECTS</Nav.Link>
          </Nav.Item>
        </div>
        {/* </Navbar.Collapse> */}

        <div className="icons">
          <span href="github.com/patrick-gordon">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "white" }}
            />{" "}
          </span>

          <span
            href="https://www.linkedin.com/in/patrick-g-169010b2/"
            style={{ color: "white" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />{" "}
          </span>
        </div>
        {/* </div> */}
      </Navbar>
    </Styles>
  );
}
