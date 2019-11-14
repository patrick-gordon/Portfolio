import React from 'react';
import 'normalize.css';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Projects from './Components/Projects';
import NavigationBar from './Components/Nav';


function App() {
  return (
    <>
      <NavigationBar />
      <Route exact path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/contact' component={Contact}></Route>
      <Route path='/projects' component={Projects}></Route>
   </>
  );
}

export default App;
