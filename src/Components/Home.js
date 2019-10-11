import React from 'react'
import styled from 'styled-components';
import HOME_IMG from '../IMG/HOME_IMG.jpg'


const Background = styled.div`
    background-image: url(${HOME_IMG});
    background-repeat: no-repeat;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
    height: 700px;;
    width: 1250px;
`;

const Text = styled.div`
color: white;
font-size: 2rem;
`;

export default function Home() {
    return (
        <Background>
            <Text>Hello, I'm Patrick Gordon <br></br>and I am a full stack web developer.</Text>
        </Background>
    )
}
