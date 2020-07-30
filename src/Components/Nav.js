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

   @media (max-width: 700px){
      display: flex;
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
        {/* <Navbar.Brand href='/'>PG</Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <div className='links-icons-container'> */}
        <Navbar.Collapse>
          <Nav className="d-flex justify-content-end">
            <Nav.Item>
              <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">ABOUT</Nav.Link>
            </Nav.Item>
            {/* <Nav.Item><Nav.Link href='/contact'>CONTACT</Nav.Link></Nav.Item> */}
            <Nav.Item>
              <Nav.Link href="/projects">PROJECTS</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

        <div className="icons" style={{}}>
          <span href="github.com/patrick-gordon">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ marginRight: "3rem",  color: 'white' }}
            />{" "}
          </span>

          <span href="https://www.linkedin.com/in/patrick-g-169010b2/" style={{ color: 'white', marginTop: '10px'}}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
            />{" "}
          </span>
        </div>
        {/* </div> */}
      </Navbar>
    </Styles>
  );
}
