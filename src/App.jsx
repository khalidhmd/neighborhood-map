import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

import './App.css';
import ListView from './ListView';

class App extends Component {
  locations = []
  componentDidMount() {

    fetch('https://api.foursquare.com/v2/venues/explore?client_id=M1CVUYDUONKJ4H4ZMZ5Y2TXBPKYW35GIPS1JIMDYVVRG2ZP3&client_secret=RI5FRWTKNE2BUYSHOUE0HKF1L3VNY2KWUAR3IG03I0FPNR0R&v=20180323&limit=5&ll=30.841566,28.927095')
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        if (jsonData['meta']['code'] != 200) {
          alert('Error while parsing the location data returned from Foursquare.');
          return;
        }
        //console.log(jsonData);
        let locationData = [];
        for (let i = 0; i < jsonData['response']['groups'][0]['items'].length; i++) {
          const loc = {};
          loc.lat = jsonData['response']['groups'][0]['items'][i]['venue']['location']['lat'];
          loc.lng = jsonData['response']['groups'][0]['items'][i]['venue']['location']['lng'];
          loc.name = jsonData['response']['groups'][0]['items'][i]['venue']['name'];
          loc.id = i;
          locationData.push(loc);

        }
        this.locations = locationData;
        this.setState({ locations: this.locations })
        //console.log(window.locations);
        //this.locations = JSON.parse(JSON.stringify(window.locations));
      }.bind(this))
      .catch(function (e) {
        // Code for handling errors
        alert('Did not get response successfully from Foursquare.\n' + e);
      });
  }
  state = {
    query: '',
    neighborhood: 'North Coast',
    markers: null,
    locations: this.locations,
    map: {},
    infoWindow: null
  }

  addMarkers = (markers) => {
    this.setState({ markers });
  }

  toggleList = () => {

    var x = document.getElementsByClassName("listcontainer")[0];
    
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  addMap = (map) => {
    this.setState({ map });
  }

  addInfoWindow = (infoWindow) => {
    this.setState({ infoWindow });
  }

  bounceMarker = (marker) => {
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    setTimeout(function () { marker.setAnimation(null); }, 1000);
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
    if (this.state.locations.length > 0) {
      return (
        <div className='App' style={{ height: '95%' }}>

          <div className='headcontainer' >
            <div><button tabIndex='1' onClick={this.toggleList}>Toggle list</button></div>
            <h1>{this.state.neighborhood}</h1>
          </div>

          <div className='mapcontainer' role='application' style={{ height: '100%' }}>
            <GoogleMap
              locations={this.state.locations}
              addMarkers={this.addMarkers}
              addMap={this.addMap}
              addInfoWindow={this.addInfoWindow} />
          </div>

          <div className='listcontainer'>
            <ListView
              locations={this.state.locations}
              map={this.state.map}
              markers={this.state.markers}
              infoWindow={this.state.infoWindow}
              updateMarkers={this.updateMarkers}
              bounceMarker={this.bounceMarker} />
          </div>

        </div>
      );
    } else {
      return (
        <div className='App' style={{ height: '95%' }}>

          <div className='headcontainer' >
            <div><button tabIndex='0' onClick={this.toggleList}>Toggle list</button></div>
            <h1>{this.state.neighborhood}</h1>
          </div>

          <div className='mapcontainer' role='application' style={{ height: '100%' }}>
          Loading ...
          </div>

          <div className='listcontainer'>
            Loading ...
          </div>

        </div>
      );
    }

  }
}

export default App;
