import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

import './App.css';
import ListView from './ListView';

class App extends Component {
  locations= [
    {lat: 30.841566, lng: 28.927095, name:'Golf Porto Marina'},
    {lat: 30.847001, lng: 28.91799, name:'Marseilia Aqua Park'},
    {lat: 30.8389085, lng: 28.9438996, name:'Remal Resort'},
    {lat: 30.8416904, lng: 28.9388141, name:'Alamein WWII Museum'},
    {lat: 30.8469041, lng: 28.9420542, name:'Maxim Inn Lake View'}
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
