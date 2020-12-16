import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import Show from './pages/Show'
import Edit from './pages/Edit'
import New from './pages/New'
import Home from './pages/Home'

import Nav from './components/Nav'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <h1>App!</h1>
        <Route path='/' exact > <Home /> </Route>
        
        <Route path='/show/:id'>
          <Show />
        </Route>
        
        <Route path='/new' >
          <New />
        </Route>
        
        <Route path='/edit/:id' >
          <Edit />
        </Route>
      </div>
    );

  }
  
}

export default App;
        
        

