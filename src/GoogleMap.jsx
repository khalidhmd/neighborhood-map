import React, { Component } from 'react';

export default class extends Component {


  componentDidMount() {

    if (window.google == undefined) {
      alert('Google maps did not load properly.\n This maybe due to bad connection to the internet.');
    } else {
      var map = new window.google.maps.Map(this.refs.map, {
        center: { lat: this.props.locations[0].lat, lng: this.props.locations[0].lng },
        zoom: 15
      });

      var infoWindow = new window.google.maps.InfoWindow();

      var markers = [];

      this.props.locations.forEach((loc) => {
        var marker = new window.google.maps.Marker({
          position: { lat: loc.lat, lng: loc.lng },
          map: map,
          title: loc.name,
          id: loc.id
        });

        var bounds = new window.google.maps.LatLngBounds();
          for (let i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
          }

          //center the map to the geometric center of all markers
          map.setCenter(bounds.getCenter());

          map.fitBounds(bounds);

          //remove one zoom level to ensure no marker is on the edge.
          map.setZoom(map.getZoom() - 1);

          // set a minimum zoom 
          // if you got only 1 marker or all markers are on the same address map will be zoomed too much.
          if (map.getZoom() > 15) {
            map.setZoom(15);
          }

        window.google.maps.event.addDomListener(window, 'resize', function () {
          var bounds = new window.google.maps.LatLngBounds();
          for (let i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
          }

          //center the map to the geometric center of all markers
          map.setCenter(bounds.getCenter());

          map.fitBounds(bounds);

          //remove one zoom level to ensure no marker is on the edge.
          map.setZoom(map.getZoom() - 1);

          // set a minimum zoom 
          // if you got only 1 marker or all markers are on the same address map will be zoomed too much.
          if (map.getZoom() > 15) {
            map.setZoom(15);
          }
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

  }

  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}