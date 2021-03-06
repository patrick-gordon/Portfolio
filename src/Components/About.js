import React from "react";
import Card from "react-bootstrap/Card";
import './About.css'

export default function About() {
  return (
    <>
      <Card className='about-card'>
        <Card.Text  >
          My name is Patrick Gordon, and I’m a 24-year-old Lambda School student
          pursuing a career in Full Stack web development. While working on my
          coursework as a student, I have been working as a Team Lead for Lambda
          School since October 2019. I’m currently seeking employment
          opportunities anywhere in the U.S. beginning in May 2020.

          I’m originally from Beaumont, Texas, but I spent five years in
          Colorado studying political science at CU Boulder. My husky-mix and I
          have been in Austin, Texas for almost two years, where we love to
          hike, try new restaurants with friends, and attend concerts (in the
          Live Music Capital of the World.)

          I began to code after I moved back to Texas, and I quickly realized
          it’s the field for me. I have experience with React, Java, Node, HTML,
          CSS, MongoDB, AWS, and Redux. Through coding, I’m able to showcase my
          creativity and attention to detail. I look forward to the versatile
          opportunities that this discipline offers as I expand my understanding
          of new platforms and technologies.
        </Card.Text>
      </Card>
      {/* <Card className='about-card'>
        <Card.Text>
          I’m originally from Beaumont, Texas, but I spent five years in
          Colorado studying political science at CU Boulder. My husky-mix and I
          have been in Austin, Texas for almost two years, where we love to
          hike, try new restaurants with friends, and attend concerts (in the
          Live Music Capital of the World.)
        </Card.Text>
      </Card>
      <Card className='about-card'>
        <Card.Text >
          I began to code after I moved back to Texas, and I quickly realized
          it’s the field for me. I have experience with React, Java, Node, HTML,
          CSS, MongoDB, AWS, and Redux. Through coding, I’m able to showcase my
          creativity and attention to detail. I look forward to the versatile
          opportunities that this discipline offers as I expand my understanding
          of new platforms and technologies.
        </Card.Text>
      </Card> */}
    </>
  );
}
