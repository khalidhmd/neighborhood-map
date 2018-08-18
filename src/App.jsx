import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

import './App.css';

class App extends Component {
  state = {
    neighborhood: 'North Coast',
    locations: [
      {lat: 30.841566, lng: 28.927095, name:''},
      {lat: 30.845361, lng: 28.930625, name:''},
      {lat: 30.847931, lng: 28.915991, name:''},
      {lat: 30.844256, lng: 28.933182, name:''},
      {lat: 30.838573, lng: 28.946174, name:''}
    ]
  }
  render() {
    return (
      <div className='App' style={{height: '100%'}}>
        
        <div className='headcontainer' >
          <button>show list</button>
          <h1>the map</h1>
        </div>

        
        
        <div className='mapcontainer' style={{height: '100%'}}>
          <GoogleMap locations = {this.state.locations}/>
        </div>

        <div className='listcontainer'>
          list view
        </div>
        
      </div>
    );
  }
}

export default App;
