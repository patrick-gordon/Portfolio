import React from "react";
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

export default function NavigationBar() {
  return (
      <Navbar expand="md">
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
     

        <div className="icons">
          <a href='https://github.com/patrick-gordon' style={{color: 'white'}}>
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "white", marginRight: '3rem' }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/patrick-g-169010b2/"
            style={{ color: "white" }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x"  style={{ marginRight: '2rem'}}/>
          </a>
        </div>
      
      </Navbar>
  );
}
