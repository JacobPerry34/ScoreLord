import React, { Component } from 'react';
import MachineList from '../machines/MachineList';
import ArcadeManager from '../modules/ArcadeManager';

class ArcadeCard extends Component {
    state = {
        name: "",
        location:"",
        loadingStatus: true
      };

      componentDidMount() {
        ArcadeManager.getAllArcades();
        ArcadeManager.getOneArcade(this.props.arcadeId)
        .then(arcade => {
          this.setState({
            name: arcade.name,
            location: arcade.location,
            loadingStatus: false
          });
        });
      };

    render () {
        return (
            <div className= "card-container">
                <div className= "card-content">
                    <h3>Name:{" "}
                        <span className ="card-name">{this.state.name}</span>
                    </h3>
                    <p>Location:{" "} <span className= "card-arcade">{this.state.location}</span></p>
                    </div>
                    {/* If then statement, showing which arcade the machines are located */}
                    <MachineList/>
                </div>
        )
    }
}

export default ArcadeCard