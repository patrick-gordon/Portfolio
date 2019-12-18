import React, {useEffect, useState} from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import styled from 'styled-components';
import Axios from 'axios';

const Style = styled.div`
    display: flex;
    // flex-direction: column;
    align-items: baseline;
    // margin-top: 10rem;
`;

export default function Projects() {
    const [error, setError] = useState('');
    const [load, setLoad] = useState(false);
    const [project, setProject] = useState([])

    useEffect(() => {
        Axios
            .get('https://api.github.com/users/patrick-gordon/repos')
            .then(res=> {
                console.log(res.data)
                // setProject(res.data)
                setLoad(true)
            })
            .catch(err => {
                setError(err.message);
                setLoad(false)
            })
    })

    if(project.name === 'MERN-blog' || project.name === 'React-Instagram-App' || project.name === 'impact-dashboard') {
        return(
        <div>
            <Container>
            <Style>
                <Card style={{ width: '18rem', margin:'2rem', height: '20rem', backgroundColor: '#7a7573' }}>
                <Card.Img variant="top" src="holder.js/100px180"></Card.Img>
                <Card.Body>
                    <Card.Title>Project 1</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button href='https://github.com/patrick-gordon/MERN-blog' style={{ backgroundColor: '#ab694f', border: '1px solid white' }} variant="primary">Github repo</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin:'2rem',  height: '20rem', backgroundColor: '#7a7573' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Project 2</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button style={{margin:'60px', backgroundColor: '#ab694f', border: '1px solid white'}} variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem', margin:'3rem',  height: '20rem', backgroundColor: '#7a7573' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Project 3</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button style={{margin:'60px', backgroundColor: '#ab694f', border: '1px solid white'}} variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </Style>
            </Container>
        </div>
    )
} else {
    return(
        <div>Can not get Project</div>
        )
    }
}
