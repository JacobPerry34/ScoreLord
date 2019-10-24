import React, { Component } from "react";

class HighScoresCard extends Component {
  // scoresList() { <span> {this.props.scoreProp.higscores.map((highScore)=>
  //     <li>{highScore}</li>)} </span>

  render() {
    return (
      <div className="card-container">
        <div className="card-content-scores">
          <p>
            Name: <span className="card-scores">{this.props.scoreProp.user.name}</span>
          </p>
          <p>
            <span className="card-details">
              {this.props.scoreProp.highScore}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default HighScoresCard;
