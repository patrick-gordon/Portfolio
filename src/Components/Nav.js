import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'



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
