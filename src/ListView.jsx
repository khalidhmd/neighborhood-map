import React, {Component} from "react"
import './App.css'


class ListView extends Component {

  state = {
    query: ''
    
  }

  clickMarker = (e) => {
    this.props.infoWindow.setContent(this.props.markers[e.target.dataset.key].title)
    this.props.infoWindow.open(this.props.map, this.props.markers[e.target.dataset.key]);
  }

  updateQuery = (query) => {
    this.setState({ query })
    if (query) {
      
    } else {
      //this.setState({ showingBooks })
    }
  }

  render() {

    return (
      <div >
        <div >

          <div >

            <input 
              type="text"
              placeholder="Search by place name"
              value={this.state.query}/>

          </div>
        </div>
        <div >
          <ol >
            {this.props.locations.map((loc, i) => (
              <li key={i} data-key={i} onClick={this.clickMarker} className="listitem">
                {loc.name}
              </li>))}
          </ol>
        </div>
      </div>
    )
  }
}

export default ListView
