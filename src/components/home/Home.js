import React, { Component } from "react";
import Registration from "../auth/Register";
import Login from "../auth/Login";
import './Home.css'
import { Dropdown } from 'react-bootstrap'


class Home extends Component {
  render() {
    return (
      <div className ="background">
        <div className="logInButtons">
          <Login/>
          <Registration />
          </div>
           <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Find an Arcade
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item  href="/arcades/1">Peddler</Dropdown.Item>
    <Dropdown.Item href="/arcades/2">QuickSilver</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
          </div>

    );
  }
}

export default Home;
