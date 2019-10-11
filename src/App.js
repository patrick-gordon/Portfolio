import React from 'react';
import './App.css';
// import { Nav, Home, Contact, About } from './Components';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Nav from './Components/Nav';


function App() {
  return (
    <>
      <Nav />
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
   </>
  );
}

export default App;
