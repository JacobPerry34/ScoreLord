import React, { Component } from "react";
import MachineManager from "../modules/MachineManager";



class MachineDetail extends Component {
  state = {
    name: "",
    details: "",
    genre:"",
    arcade:"",
    machineArray: [],
    loadingStatus: true
  };


  componentDidMount() {
    MachineManager.getAllMachines();
    MachineManager.getOneMachine(this.props.machineId)
    .then(machine => {
      this.setState({
        name: machine.name,
        details: machine.details,
        genre: machine.genre.name,
        arcade: machine.arcade.name,
        loadingStatus: false
      });
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>
            <span style={{ color: "darkslategrey" }}>
              {this.state.name}
            </span>
          </h3>
          <p><span>{this.state.details}</span></p>
          <p><span>{this.state.genre}</span></p>
          <p><span>{this.state.arcade}</span></p>
          </div>
          </div>
          )
  }
}

export default MachineDetail;