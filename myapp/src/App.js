import React, { Component } from 'react';
import './index.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './components/home';
import Project from './components/project';
import Contact from './components/contact';
import Blog from './components/blog';
import Navbar from './components/navbar'
class App extends Component {
  render(){
      return(
          <BrowserRouter>
            <div className="main-component">
                <Navbar />
                <Route exact path="/" Component={Home} />
                <Route path="/project" Component={Project} />
                <Route path="/contact" Component={Contact} />
                <Route path="/blog" Component={Blog} />
            </div>
          </BrowserRouter> 
      )
  }
}

export default App;
