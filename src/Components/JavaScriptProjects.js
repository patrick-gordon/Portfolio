import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";

import Axios from "axios";

export default function Projects() {
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Axios.get("https://api.github.com/users/patrick-gordon/repos?sort=updated") //can change this into project GET or some other, more effiecent way
      .then((res) => {
        console.log(res.data);
        setProjects(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(false);
      });
  }, []);

  return (
    <>
      <Container>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* <h1> HI {console.log('[checking projects]', projects)} </h1> */}
          {projects.map((repo) => {
            if (
              // repo.name.includes("patChat") ||
              repo.name.includes("Impact") ||
              repo.name.includes("Instagram") ||
              repo.name.includes("Simpson-Says") ||
              repo.name.includes("Client") ||
              repo.name.includes("Portfolio") ||
              repo.name.includes('Space-Tracker')
            ) {
              return (
                <div>
                  <Card
                    style={{
                      backgroundColor: "#6a5049",
                      opacity: "0.8",
                      border: "2px solid white",
                      width: "28rem",
                      margin: "2rem",
                    }}
                  >
                    <Card.Body style={{ color: "white" }}>
                      <Card.Title style={{ fontSize: "30px" }}>
                        {repo.name}
                      </Card.Title>
                      <Card.Text style={{ fontSize: "23px" }}>
                        {repo.description}
                      </Card.Text>
                      <Button
                        style={{
                          marginTop: "20px",
                          backgroundColor: "#ab694f",
                          border: "1px solid white",
                          opacity: "1",
                        }}
                        href={`http://www.github.com/patrick-gordon/${repo.name}`}
                        variant="primary"
                      >
                        Github repo
                      </Button>
                      <Card.Text style={{ marginTop: "10px" }}>
                        Deployed link:<a>{repo.homepage}</a>{" "}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              );
            } else {
              console.log(" repo not found");
            }
          })}
        </div>
      </Container>
    </>
  );
}
