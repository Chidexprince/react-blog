import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './materialize.min.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'
import Nav from './Nav'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/posts/:post_id" component={Post}/>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
