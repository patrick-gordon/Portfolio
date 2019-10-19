import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'

const Navbar = styled.div`
// border: 1px solid black;
text-decoration: none;
display: flex;
text: #ab5f0e;
height: 5rem;
align-items: center;
font-size: 1.5rem;
`;

const LinkDiv = styled.div`
// border: 1px solid black;
display: flex;
text-decoration: none;
width: 30rem;
justify-content: space-between;
margin-left: 5rem;
`;

const Logo = styled.div`
margin-left: 37rem;
border: 3px solid black;
padding: 1rem;
`;


export default function Nav() {
    return (
        <Navbar>
            <LinkDiv>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/projects'>Projects</Link>
            </LinkDiv>
            <Logo>
                <h2>PG</h2>
            </Logo>
        </Navbar>
    )
}
