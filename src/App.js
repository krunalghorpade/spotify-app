import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let priCol = "green"
let secCol = "#4d4d4d"


class Playlist extends Component{
  render() {
    return (
      <div className="soundcard">
        <img/>
        <h3>Playlist</h3>
        <ul className="sc-list">
          <li>song</li>
          <li>song</li>
          <li>song</li>
          <li>song</li>
        </ul>

      </div>
    );
  }
}


class Aggregate extends Component{
  render() {
    return (
      <div style={{'width' : '40%', 'display' : 'inline-block'}}>
        <h3 style={{'color': 'green'}}>Number text
        </h3>
      </div>
    );
  }
}

class Filter extends Component{
  render() {
    return (
      <div className="filter">
        <img/>
        <input type="text"/>
        <span style={{"color": secCol}}>Filter</span>

      </div>
    );
  }
}

class App extends Component {
  render() {
  
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        
      </div>
    );
  }
}

export default App;
