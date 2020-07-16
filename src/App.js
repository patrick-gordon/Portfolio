import React from "react";
import "react-bootstrap";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/Projects";
import NavigationBar from "./Components/Nav";

function App() {
  return (
    <div className="overall">
      <NavigationBar />
      <Route exact path="/" component={Home} />
        
      
      <Route path="/about" component={About} />
       
     
      {/* <Route path='/contact'>
       <Contact/>
       </Route> */}
      <Route path="/projects" component={Projects} />
        
      
    </div>
  );
}

export default App;
