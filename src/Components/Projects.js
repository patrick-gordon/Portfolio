import React from 'react'
import {Card, Button} from 'react-bootstrap'
import img from '../IMG/home4.jpg';
import styled from 'styled-components'

const Background = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    width: auto;
    height: 40rem;
`;

const Wrapper = styled.div`
display: flex;
justify-content: space-between;

`

export default function Projects() {
    return (
        <Background>
        <Wrapper>
            <Card style={{ width: '20rem', height: '20rem'  }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem'  }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem'  }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Wrapper>
        </Background>
    )
}
