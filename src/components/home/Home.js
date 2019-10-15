import React, { Component } from "react";
import Registration from "../auth/Register";
import Login from "../auth/Login";
import './Home.css'


class Home extends Component {
  render() {
    return (
      <div className ="background">
        <div className="logInButtons">
          <Login/>
          <Registration />
        </div>
      </div>
    );
  }
}

export default Home;
