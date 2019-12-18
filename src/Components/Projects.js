import React, {useEffect, useState} from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import styled from 'styled-components';
import Axios from 'axios';

const Style = styled.div`
    display: flex;
    
    align-items: baseline;
    
`;

export default function Projects() {
    const [error, setError] = useState('');
    const [load, setLoad] = useState(false);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        Axios
            .get('https://api.github.com/users/patrick-gordon/repos')
            .then(res=> {
                console.log(res.data)
                setProjects(res.data)
                setLoad(true)
            })
            .catch(err => {
                setError(err.message);
                setLoad(false)
            })
        },[])
        
        
        
        return (
            <>
            {/* <h1> HI {console.log('[checking projects]', projects)} </h1> */}
            {projects.map(repo => {
                if (repo.name.includes('java')) {
                    return (
                        <div>
                            <Container>
                                <Style>
                                    <Card style={{ width: '18rem', margin:'2rem', height: '20rem', backgroundColor: '#7a7573' }}>
                                    <Card.Img variant="top" src="holder.js/100px180"></Card.Img>
                                    <Card.Body>
                                        <Card.Title>{repo.name}</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <Button href={`http://www.github.com/patrick-gordon/${repo.name}`} style={{ backgroundColor: '#ab694f', border: '1px solid white' }} variant="primary">Github repo</Button>
                                    </Card.Body>
                                    </Card>
                                </Style>
                            </Container>
                        </div>  
                    );
            } else {
                console.log('MERN not found');
            }
            })}
            </>  
        );
    }





