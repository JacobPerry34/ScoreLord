import React, { Component } from "react";
import MachineManager from "../modules/MachineManager";
import HighScoresList from "../highscores/HigScoresList";
import './MachineDetail.css'



class MachineDetail extends Component {
  state = {
    name: "",
    details: "",
    genre:"",
    arcade:"",
    synopsis:"",
    image: "",
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
        synopsis: machine.synopsis,
        image: machine.image,
        loadingStatus: false
      });
    });
  };
  render() {
    return (
      <div className="card-detail">
        <div className="card-content-detail">
          <h3>
            <span>
              {this.state.name}
            </span>
          </h3>
          <p><span><img className="image-detail" src={this.state.image} alt="GauntletPicture"></img></span></p>
          <p><span>{this.state.details}</span></p>
          <p><span>{this.state.synopsis}</span></p>
          <p><span>{this.state.genre}</span></p>
          <p><span>{this.state.arcade}</span></p>
          <HighScoresList {...this.props} machines={this.props.machines}/>
          </div>
          </div>
          )
  }
}

export default MachineDetail;