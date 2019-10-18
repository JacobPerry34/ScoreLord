import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './MachineCard.css'

class MachineCard extends Component {

    render () {
        return (
            <div className= "card-container">
                <div className= "card-content-machine">
                    <h3>Name:{" "}
                        <span className ="card-name">{this.props.machineProp.name}</span>
                    </h3>
                    <p>Details:{" "}<span className= "card-details">{this.props.machineProp.details}</span></p>
                    <p>Genre:{" "} <span className= "card-genre">{this.props.machineProp.genre.name}</span></p>
                    <p>Arcade:{" "} <span className= "card-arcade">{this.props.machineProp.arcade.name}</span></p>
                    <Link to={`/machines/${this.props.machineProp.id}`}><button className="btn btn-dark">Information</button></Link>
                </div>
                </div>
        )
    }
}

export default MachineCard