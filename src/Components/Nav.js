import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.div`
height: 30px;
text-decoration: none;
display: flex;
justify-content: space-evenly;
background-color: #071a91;
color: #ab5f0e;
`;


export default function Nav() {
    return (
        <Navbar>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </Navbar>
    )
}
