import React from 'react'
import styled from 'styled-components';
import { Nav, Navbar, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import '../Components/nav.css'

const Styles = styled.div`
.navbar{
    text-decoration: none;
    background-color: #7a7573
    height: 5rem;
    font-size: 1.5rem;
}

.navbar-brand{
    background-color: #ab694f;
    font-size: 1.5rem;
    color: white;
    height: 2.3rem;
    margin-left: 3rem;
    width:2.3rem;
    text-align: center;
}

.nav-item .nav-link{
     margin-left: 7rem;
    color: white; 
}
`;




export default function NavigationBar() {
    return (
        <div className='nav-wrapper'>
       <Styles>
           <Navbar expands='lg'>
               <Navbar.Brand href='/'>PG</Navbar.Brand>
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ml-auto'>
                        <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/about'>About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/contact'>Contact</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/projects'>Projects</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
           </Navbar>
       </Styles>
       </div>
    )
}
