import React, {useEffect, useState} from 'react'
import { Card, Button, Container } from 'react-bootstrap'

import Axios from 'axios';



export default function Projects() {
    const [error, setError] = useState('');
    const [load, setLoad] = useState(false);
    const [projects, setProjects] = useState([])

    useEffect(() => {
        Axios
            .get('https://api.github.com/users/patrick-gordon/repos?sort=updated') //can change this into project GET or some other, more effiecent way
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
        <Container>
        <div className='project-container'>
            {/* <h1> HI {console.log('[checking projects]', projects)} </h1> */}
            {projects.map(repo => {
                if (repo.name.includes('*')) {
                    return (
                        <div className='card-container'>                      
                            <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px180"></Card.Img> */}
                            <Card.Body >
                                <Card.Title>{repo.name}</Card.Title>
                                <Card.Text>
                                    {repo.description}
                                </Card.Text>
                                <Button href={`http://www.github.com/patrick-gordon/${repo.name}`} variant="primary">Github repo</Button>
                            </Card.Body>
                            </Card>
                        </div>  
                    );
                } else {
                console.log('MERN not found');
                }
            })}
        </div>  
        </Container>
        </>
        );
    }





