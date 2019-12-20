import React from 'react'
import styled from 'styled-components';
import img from '../IMG/home4.jpg';



const Background = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    width: auto;
    height: 40rem;
`;

export default function Home() {
    return (
        <Background>
          
        </Background>
    )
}
