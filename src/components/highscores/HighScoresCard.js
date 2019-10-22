import React, { Component } from "react";

class HighScoresCard extends Component {
  // scoresList() { <span> {this.props.scoreProp.higscores.map((highScore)=>
  //     <li>{highScore}</li>)} </span>

  render() {
    return (
      <div className="card-container">
        <div className="card-content">
          <p>
            Name: <span className="card-name">{this.props.scoreProp.user.name}</span>
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
