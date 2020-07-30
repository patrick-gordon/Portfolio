import React from "react";
import "../Components/Home.css";
import { Container } from "react-bootstrap";
import {
  faReact,
  faHtml5,
  faCss3,
  faNode,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Container>
        <div className="home-content">
          <h2>PATRICK F. GORDON</h2>
          <p>
            Full Stack Web Developer <ol> Austin, TX</ol>
          </p>
        </div>
      </Container>

      <div className="home-icons">
        <FontAwesomeIcon style={{ color: "white",  marginLeft: '15rem' }} icon={faHtml5} size="4x" />
        
        <FontAwesomeIcon style={{ color: "white",  marginLeft: '15rem' }} icon={faCss3} size="4x" />
        
        <FontAwesomeIcon style={{ color: "white",  marginLeft: '15rem' }} icon={faReact} size="4x" />
        
        <FontAwesomeIcon style={{ color: "white", marginLeft: '15rem'  }} icon={faNode} size="4x" />
       
        <FontAwesomeIcon style={{ color: "white",  marginLeft: '15rem' }} icon={faPython} size="4x" />
        
      </div>
    </>
  );
}
