import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import RegistrationCard from "./auth/RegisterCard";
import LoginCard from "./auth/LoginCard";
import MachineList from "./machines/MachineList";
import MachineDetail from "./machines/MachineDetail";
import ArcadeCard from "./arcades/ArcadeCard";
import HighScoresList from "./highscores/HigScoresList";
import NewHighScore from "./highscores/NewHighScore";

class ApplicationViews extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <Home
            {...this.props}
            arcadeId={parseInt(props.match.params.arcadeId)}
            arcades={this.state.arcades}
            />;
          }}
        />
        <Route
          exact
          path="/auth"
          render={props => {
            return <RegistrationCard {...props} />;
          }}
        />
        <Route
          exact
          path="/auth/LoginCard"
          render={props => {
            return (
              <LoginCard
                {...props}
                userId={parseInt(props.match.params.userId)}
              />
            );
          }}
        />
        <Route
          exact
          path="/machines"
          render={props => {
            return <MachineList {...props} machines={this.state.machines} />;
          }}
        />
        <Route
          exact
          path="/machines/:machineId(\d+)"
          render={props => {
            return (
              <MachineDetail
                machineId={parseInt(props.match.params.machineId)}
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/arcades/:arcadeId(\d+)"
          render={props => {
            return(
              <ArcadeCard
                arcades={this.state.arcades}
                arcadeId ={parseInt(props.match.params.arcadeId)}
                {...props}
              />
            );
          }}
        />
         <Route
          exact
          path="/userMachines/highScores"
          render={props => {
            return <HighScoresList {...props} highScores={this.state.highScores}  />;
          }}
        />
        <Route
          path="/userMachines"
          render={props => {
            return <NewHighScore {...props} userMachines= {this.state.userMachines} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
