import React from 'react'
import styled from 'styled-components';
import { Nav, Navbar, ButtonToolbar, DropdownButton, Dropdown } from 'react-bootstrap';
import '../Components/nav.css'

const Styles = styled.div`
.navbar{
    text-decoration: none;
    background-color: #3a3a43
    height: 5rem;
    font-size: 1.5rem;
    opacity: 0.6;
    width: 100%;
}

// .navbar-brand{
//     // background-color: #ab694f;
//     font-size: 1.5rem;
//     color: white;
//     height: 2.5rem;
//     margin-left: 0rem;
//     width:2.7rem;
//     text-align: center;
// }

.nav-item .nav-link{
    margin-left: 5rem;
    color: white; 
    width: 100%;

    @media(max-width: 700px) {
        margin-left: 0;
    }
}
`;




export default function NavigationBar() {
    return (
        <div className='nav-wrapper'>
       <Styles>
           <Navbar expands='lg'>
               {/* <Navbar.Brand href='/'>PG</Navbar.Brand> */}
               <Navbar.Toggle aria-controls='basic-navbar-nav' />
               {/* <Navbar.Collapse className='justify-content-end'> */}
                    <Nav className='ml-auto'>
                        <Nav.Item><Nav.Link href='/'>HOME</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/about'>ABOUT</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/contact'>CONTACT</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/projects'>PROJECTS</Nav.Link></Nav.Item>
                    </Nav>
                {/* </Navbar.Collapse> */}
           </Navbar>
       </Styles>
       </div>
    )
}
