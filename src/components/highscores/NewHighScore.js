import React,{ Component } from "react";
import HighScoreManager from "../modules/HighScoreManager";
import { Link } from "react-router-dom";

class NewHighScore extends Component {
  state = {
    userId: "",
    machineId: "",
    highScore: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
};


  constructNewScore = evt => {
    evt.preventDefault();
    if (this.state.highScore === " ") {
      window.alert("Please input data");
    } else {
      this.setState({ loadingStatus: true });
      const newHighScore = {
        userId: parseInt(localStorage.getItem(`credentials`)),
        machineId: this.props.machineId,
        highScore: parseInt(this.state.highScore)
      };
      console.log(newHighScore);
      HighScoreManager.post(newHighScore).then(() =>
        this.props.history.push(`/machines/${this.props.machineId}`)
      );
    }
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          required
          onChange={this.handleFieldChange}
          id="highScore"
          placeholder="           High Score"
        />
        <div className="alignRight">
            <button
              type="button"
              disabled={this.state.loadingStatus}
              onClick={this.constructNewScore}
            >
              Submit
            </button>
        </div>
      </React.Fragment>
    );
  }
}

export default NewHighScore;
