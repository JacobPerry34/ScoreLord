import React, { Component } from "react";
import HighScoreManager from "../modules/HighScoreManager";



class HighScoresPerMachine extends Component {
  state = {
    highScores: [],
    loadingStatus: true
  };


  componentDidMount() {
    HighScoreManager.getAllHighScores();
    HighScoreManager.getOneHighScore(this.props.machineId)
    .then(highScoresFromDatabase => {
      this.setState({
        highScores: highScoresFromDatabase,
        loadingStatus: false
      });
    });
  };
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


export default HighScoresPerMachine;