import React, { Component } from "react";
import MachineList from "../machines/MachineList";
import ArcadeManager from "../modules/ArcadeManager";
import "./ArcadeCard.css";

class ArcadeCard extends Component {
  state = {
    id: "",
    name: "",
    location: "",
    loadingStatus: true
  };

  componentDidMount() {
    ArcadeManager.getAllArcades();
    ArcadeManager.getOneArcade(this.props.arcadeId).then(arcade => {
      this.setState({
        id: arcade.id,
        name: arcade.name,
        location: arcade.location,
        loadingStatus: false
      });
    });
  }


  render() {
    return (
      <div className="card-container">
        <div className="card-content-arcade">
          <h3>
             <span className="card-name">{this.state.name}</span>
          </h3>
          <p>
             <span className="card-arcade">{this.state.location}</span>
          </p>
        </div>
        {/* If then statement, showing which arcade the machines are located */}
        <div>
          <MachineList arcades= {this.state.arcades} {...this.props}/>
        </div>
      </div>
    );
  }
}

export default ArcadeCard;
