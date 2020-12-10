import React from "react";
import "../Components/Home.css";
import { Container } from "react-bootstrap";
import {
  faReact,
  faHtml5,
  faCss3,
  faNode,
  faPython,
  faJs,
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


        <Container>
      <div className="home-icons">
        <FontAwesomeIcon
          style={{ color: "white", marginLeft: "5rem" }}
          icon={faHtml5}
          size="5x"
        />

        <FontAwesomeIcon
          style={{ color: "white", marginLeft: "5rem" }}
          icon={faCss3}
          size="5x"
        />

        <FontAwesomeIcon
          style={{ color: "white", marginLeft: "5rem" }}
          icon={faJs}
          size="5x"
        />

        <FontAwesomeIcon
          style={{ color: "white", marginLeft: "5rem" }}
          icon={faReact}
          size="5x"
        />

        <FontAwesomeIcon
          style={{ color: "white", marginLeft: "5rem" }}
          icon={faNode}
          size="5x"
        />

        <FontAwesomeIcon
          style={{ color: "white", marginLeft: "5rem" }}
          icon={faPython}
          size="5x"
        />
      </div>
        </Container>
    </>
  );
}
