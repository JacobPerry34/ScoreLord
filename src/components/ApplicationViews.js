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
import UserCard from "./users/UserCard";
import UserEditForm from "./users/UserEditCard";
import Logout from "./auth/Logout";

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
        {/* <Route
        path="/"
        render={props =>{
          return (
            <Logout
            {...this.props}
            />
          )
        }}
        /> */}
        <Route
          exact
          path="/machines"
          render={props => {
            return <MachineList {...this.props} machines={this.state.machines} arcades={this.state.arcades}
             />;
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
                machines ={this.state.machines}
                {...this.props}
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
        <Route
          exact
          path="/users/:userId(\d+)/edit"
          render={props => {
            return <UserEditForm{...props} />;
          }}
        />
         <Route
         exact
          path="/users"
          render={props => {
            return <UserCard {...this.props} users={this.state.users} />;
          }}
        />
      </React.Fragment>
    );
  }
}

export default ApplicationViews;
