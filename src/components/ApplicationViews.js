import { Route } from "react-router-dom";
import React, { Component } from "react";
import Home from "./home/Home";
import RegistrationCard from "./auth/RegisterCard";
import LoginCard from "./auth/LoginCard";
import MachineList from "./machines/MachineList";
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
            return <Home {...this.props} />;
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
            return <LoginCard {...props} userId = {parseInt(props.match.params.userId)}/>;
          }}
        />
        <Route
        exact
          path="/machines"
          render={props => {
        return (<MachineList
            {...props}
            machines ={this.state.machines}
            />
        )}} />
      </React.Fragment>
    );
  }
}

export default ApplicationViews