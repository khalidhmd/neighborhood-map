import React, { Component } from 'react';

export default class extends Component {


  componentDidMount() {
    var map = new window.google.maps.Map(this.refs.map, {
      center: { lat: this.props.locations[0].lat, lng: this.props.locations[0].lng },
      zoom: 13
    });

    var infoWindow = new window.google.maps.InfoWindow();

    var markers = [];

    this.props.locations.forEach((loc, index) => {
      var marker = new window.google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map: map,
        title: `location ${index}`
      });

      marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);
      });
      markers.push(marker);
    }); 

    this.props.addMarkers(markers);
    this.props.addMap(map);
    this.props.addInfoWindow(infoWindow);

  }

  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}