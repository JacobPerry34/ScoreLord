import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";
import UserManager from "../modules/UserManager";
class UserCard extends Component {
    state = {
        name: "",
        email: "",
        genre: "",
         loadingStatus: true
      };

    componentDidMount() {
        UserManager.getAllUserNames();
        UserManager.getOneUser(localStorage.getItem('credentials'))
        .then(user => {
          this.setState({
            name: user.name,
            email: user.email,
            loadingStatus: false
          });
        });
      };


  render() {
    return (
      <div className="card-container">
        <div className="card-content-user">
          <h5>
            Name:{" "}
            {this.state.name}
          </h5>
          <p>
            Email: <span className="card-email">{this.state.email}</span>
          </p>
          <p> <span className="card-genre"></span>
          <Link to={`/users/${localStorage.getItem('credentials')}/edit`}><button>Edit</button></Link>
          </p>
        </div>
      </div>
    );
  }
}

export default UserCard;
