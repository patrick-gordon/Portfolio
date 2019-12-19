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
            <>
            {/* <h1> HI {console.log('[checking projects]', projects)} </h1> */}
            {projects.map(repo => {
                if (repo.name.includes('portfolio')) {
                    return (
                        <div className='card-container'>                      
                            <Card style={{ width: '28rem', height: '20rem', backgroundColor: '#7a7573', margin: '0 auto', padding: '0px' }}>
                            <Card.Img variant="top" src="holder.js/100px180"></Card.Img>
                            <Card.Body style={{padding: '0px'}}>
                                <Card.Title style={{color: 'white', fontSize: '2rem'}}>{repo.name}</Card.Title>
                                <Card.Text  style={{color: 'white', fontSize: '1.5rem', lineHeight: '1.8rem', marginTop: '2.5rem'}}>
                                {repo.description}
                                </Card.Text>
                                <Button href={`http://www.github.com/patrick-gordon/${repo.name}`} style={{position: 'absolute', bottom: '0', backgroundColor: '#ab694f', border: '1px solid white' }} variant="primary">Github repo</Button>
                            </Card.Body>
                            </Card>
                        </div>  
                    );
                } else {
                console.log('MERN not found');
                }
            })}
            </>  
        );
    }





