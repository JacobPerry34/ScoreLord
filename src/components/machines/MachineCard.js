import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './MachineCard.css'

class MachineCard extends Component {

    render () {
        return (
            <div className= "card-container">
                <div className= "card-content-machine">
                    <h3>
                        <span className ="card-name-primary">{this.props.machineProp.name}</span>
                    </h3>
                    <p><span className= "card-image"><img className="image" src={this.props.machineProp.image}></img></span> </p>
                    <p>{" "}<span className= "card-details">{this.props.machineProp.details}</span></p>
                    <p>Genre:{" "} <span className= "card-genre">{this.props.machineProp.genre.name}</span></p>
                    <p>Arcade:{" "} <span className= "card-arcade">{this.props.machineProp.arcade.name}</span></p>
                    <Link to={`/machines/${this.props.machineProp.id}`}><button className="btn btn-dark">Info & High Scores</button></Link>
                </div>
                </div>
        )
    }
}

export default MachineCard