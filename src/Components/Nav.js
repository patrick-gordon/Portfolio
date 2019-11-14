import React from 'react'
import styled from 'styled-components';
import {Nav, Navbar} from 'react-bootstrap';

const Styles = styled.div`
.navbar{
    text-decoration: none;
    background-color: #7a7573
    height: 5rem;
    font-size: 1.5rem;
}

.navbar-brand{
    background-color: #ab694f;
}

.nav-item .nav-link{
    color: white; 
}
`;




export default function NavigationBar() {
    return (
       <Styles>
           <Navbar expands='lg'>
               <Navbar.Brand href='/'>PG</Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav classname='ml-auto'>
                        <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/contact'>Contact</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/projects'>Projects</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
           </Navbar>
       </Styles>
    )
}
