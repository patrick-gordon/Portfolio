import React from "react";
import "../Components/Home.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <div className="background">
        <h2>PATRICK F. GORDON</h2>
        <p>
          Full Stack Web Developer <ol> Austin, TX</ol>
        </p>
      </div>
    </Container>
  );
}
