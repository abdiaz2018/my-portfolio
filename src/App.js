import './App.css';
import React, { Component } from 'react';
import Navbar from './navbar';
import { Routes, Route } from 'react-router';
import Home from './home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 id="title">Abraham Armando Diaz</h1>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about"/>
        </Routes>
      </div>
    )
  }
}

export default App;
