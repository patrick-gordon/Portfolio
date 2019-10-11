import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
height: 4rem;
text-decoration: none;
display: flex;
justify-content: space-evenly;
background-color: #020852;
text: #ab5f0e;
font-size: 2rem;
padding-top: 1.6rem;
`;


export default function Nav() {
    return (
        <Navbar>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/projects'>Projects</Link>
        </Navbar>
    )
}
