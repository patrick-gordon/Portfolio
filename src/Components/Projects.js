import React, {useEffect, useState} from 'react'
import { Card, Button, Container } from 'react-bootstrap'

import Axios from 'axios';
import '../Components/projects.css'



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
        <Container>
        <div className='project-container'>
            {/* <h1> HI {console.log('[checking projects]', projects)} </h1> */}
            {projects.map(repo => {
                if (repo.name.includes('Sample')) {
                    return (
                        <div className='card-container'>                      
                            <Card className='card'>
                            {/* <Card.Img variant="top" src="holder.js/100px180"></Card.Img> */}
                            <Card.Body>
                                <Card.Title className='card-title'>{repo.name}</Card.Title>
                                <Card.Text className='card-text'>
                                    {repo.description}
                                </Card.Text>
                                <Button className='card-button' href={`http://www.github.com/patrick-gordon/${repo.name}`} variant="primary">Github repo</Button>
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
        );
    }





