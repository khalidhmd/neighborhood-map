import React, {Component} from "react"
import './App.css'
import escapeRegExp from 'escape-string-regexp'

class ListView extends Component {
  locations = []
  state = {
    query: ''
    
  }

  clickMarker = (e) => {
    let marker;
    marker = this.props.markers.find(el => el.id == e.target.dataset.id);
    
    this.props.infoWindow.setContent(marker.title)
    this.props.infoWindow.open(this.props.map, marker);
    //this.props.infoWindow.setContent(this.props.markers[e.target.dataset.id].title)
    //this.props.infoWindow.open(this.props.map, this.props.markers[e.target.dataset.id]);
  }

  updateQuery = (query) => {
    this.setState({ query });
    this.props.updateMarkers(this.locations);
    
  }

  render() {
    //let locations;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      this.locations = this.props.locations.filter((loc) => match.test(loc.name));
      this.props.updateMarkers(this.locations);
    } else {
      this.locations = JSON.parse(JSON.stringify(this.props.locations));
      this.props.updateMarkers(this.locations);
    }
    
    return (
      <div >
        
        
          <div >
          
            <input 
              type="text"
              placeholder="Search by place name"
              value={this.state.query}
              onChange = {(event) => this.updateQuery(event.target.value)}/>
          </div>
        
        <div >
          <ol >
            {this.locations.map((loc, i) => (
              <li key={i} data-id={loc.id} onClick={this.clickMarker} className="listitem">
                {loc.name}
              </li>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListView
