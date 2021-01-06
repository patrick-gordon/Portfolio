import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";

import PythonProjects from "./PythonProjects";
import JavaScriptProjects from "./JavaScriptProjects";

export default function Projects() {
  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Tabs defaultActiveKey="JavaScript" style={{ fontSize: "20px" }}>
          <Tab eventKey="JavaScript" title="JavaScript">
            <JavaScriptProjects />
          </Tab>
          <Tab eventKey="Python" title="Python">
            {/* <PythonProjects /> */}
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
