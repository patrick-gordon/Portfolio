import React from 'react'
import '../Components/Home.css'
import {Container} from 'react-bootstrap';
import styled from 'styled-components';


const Background = styled.div`
margin-top: 5rem;
width: 100%;
background-color: #7a7573;
height: 100vh;
border: 2px solid white;
opacity: 0.95;
`;




export default function Home() {
    return (
        <Container>
           <Background>

           </Background>
        </Container>
    )
}
