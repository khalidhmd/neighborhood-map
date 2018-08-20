import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

import './App.css';
import ListView from './ListView';

class App extends Component {
  locations = [
    { lat: 30.841566, lng: 28.927095, name: 'Golf Porto Marina', id: 0 },
    { lat: 30.847001, lng: 28.91799, name: 'Marseilia Aqua Park', id: 1 },
    { lat: 30.8389085, lng: 28.9438996, name: 'Remal Resort', id: 2 },
    { lat: 30.8416904, lng: 28.9388141, name: 'Alamein WWII Museum', id: 3 },
    { lat: 30.8469041, lng: 28.9420542, name: 'Maxim Inn Lake View', id: 4 }
  ]
  state = {
    query: '',
    neighborhood: 'North Coast',
    showingLocations: this.locations,
    markers: null,
    map: {},
    infoWindow: null
  }

  addMarkers = (markers) => {
    this.setState({ markers });
  }

  addMap = (map) => {
    this.setState({ map });
  }

  addInfoWindow = (infoWindow) => {
    this.setState({ infoWindow });
  }

  bounceMarker = (marker) => {
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(function(){marker.setAnimation(null); }, 1000);
  }

  updateMarkers = (locations) => {
    if (this.state.infoWindow != null) this.state.infoWindow.close();
    if (this.state.markers != null) {
      let newMarkers = this.state.markers.map(m => {
        m.setMap(null);
        return m;
      });

      locations.forEach(loc => {
        newMarkers.find(m => m.id == loc.id).setMap(this.state.map);
      });
    }


  }


  render() {
    return (
      <div className='App' style={{ height: '95%' }}>

        <div className='headcontainer' >
          <button>Toggle list</button>
          <h1>{this.state.neighborhood}</h1>
        </div>

        <div className='mapcontainer' style={{ height: '100%' }}>
          <GoogleMap
            locations={this.state.showingLocations}
            addMarkers={this.addMarkers}
            addMap={this.addMap}
            addInfoWindow={this.addInfoWindow} />
        </div>

        <div className='listcontainer'>
          <ListView locations={this.state.showingLocations}
            map={this.state.map}
            markers={this.state.markers}
            infoWindow={this.state.infoWindow}
            updateMarkers={this.updateMarkers} 
            bounceMarker={this.bounceMarker}/>
        </div>

      </div>
    );
  }
}

export default App;
