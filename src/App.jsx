import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

import './App.css';
import ListView from './ListView';

class App extends Component {
  locations= [
    {lat: 30.841566, lng: 28.927095, name:'Golf Porto Marina'},
    {lat: 30.845361, lng: 28.930625, name:'Location 2'},
    {lat: 30.847931, lng: 28.915991, name:'Location 3'},
    {lat: 30.844256, lng: 28.933182, name:'Location 4'},
    {lat: 30.838573, lng: 28.946174, name:'Location 5'}
  ]
  state = {
    query: '',
    neighborhood: 'North Coast',
    showingLocations: this.locations,
    markers:[],
    map:{},
    infoWindow:{}
  }

  addMarkers = (markers) => {
    this.setState({markers});
  }

  addMap = (map) => {
    this.setState({map});
  }

  addInfoWindow = (infoWindow) => {
    this.setState({infoWindow});
  }
  
  
  render() {
    return (
      <div className='App' style={{height: '100%'}}>
        
        <div className='headcontainer' >
          <button>show list</button>
          <h1>the map</h1>
        </div>

        <div className='mapcontainer' style={{height: '100%'}}>
          <GoogleMap 
            locations = {this.state.showingLocations}
            addMarkers = {this.addMarkers}
            addMap = {this.addMap}
            addInfoWindow = {this.addInfoWindow}/>
        </div>

        <div className='listcontainer'>
          <ListView locations = {this.state.showingLocations}
            map = {this.state.map}
            markers = {this.state.markers}
            infoWindow = {this.state.infoWindow}/>
        </div>
        
      </div>
    );
  }
}

export default App;
