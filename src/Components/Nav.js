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
     height: 11.5rem;
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

// @media (max-width: 700px){

//   .nav-item .nav-link {
//     margin-top: 1.3rem;
//   }
//   .links-icons-container{
//     display: flex;
//     border: 1px solid black
//     text-align: center
//   }
//   .icons{
//     margin-right: 0rem;
//     margin-left: 2rem
//     // border: 1px solid black
//   }
//   .icons a{
//     border: 1px solid black
//     marginTop: 0px;
//   }
// }

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
          <a href="github.com/patrick-gordon">
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ marginRight: "3rem" }}
            />{" "}
          </a>

          <a href="https://www.linkedin.com/in/patrick-g-169010b2/" style={{ color: 'white', marginTop: '10px'}}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              // style={{ marginRight: "3rem", color: "white" }}
            />{" "}
          </a>
        </div>
        {/* </div> */}
      </Navbar>
    </Styles>
  );
}
