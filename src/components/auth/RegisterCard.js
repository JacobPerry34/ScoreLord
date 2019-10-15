import React, { Component } from "react"
import { Link } from "react-router-dom";
import UserManager from "../modules/UserManager";


class RegistrationCard extends Component {

  // Set initial state
  state = {
    name : "",
    password: "",
    email: "",
    genreId: "",
    loadingStatus: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    localStorage.setItem(
        "credentials",
        JSON.stringify({
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            genreId: this.state.genreId
        })
    )
    this.props.history.push("/");

  }

//   Function for making a new User
  makeNewUser = evt => {
    evt.preventDefault();
    if (this.state.name === " " || this.state.password === " " || this.state.email === " " || this.state.genreId === " ") {
        window.alert("Please input information, then submit ");
    } else {
        this.setState({ loadingStatus: true });
        const newUser = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email,
            genreId: this.state.genreId
        };

        // Create a User then redirect them to Home
        UserManager.post(newUser)
        .then(() => this.props.history.push("/"));
    }
}
//   All input fields for registering a new User
  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Create a Profile</h3>
            <div className="formgrid">
            <input onChange={this.handleFieldChange} type="email"
                    id="name"
                    placeholder="Username"
                    required="" autoFocus="" />
                <label htmlFor="inputName"></label>
                <br></br>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword"></label>
                <br></br>
                 <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputEmail"></label>
                <br></br>
                <input onChange={this.handleFieldChange} type="genre"
                    id="genreId"
                    placeholder="Select Genre"
                    required="" autoFocus="" />
                <label htmlFor="inputGenre"></label>
            </div>
            <Link to={`/`}><button
                        type="submit"
                        disabled={this.state.loadingStatus}
                        onClick={this.makeNewUser}
                        >Create</button></Link>
        </fieldset>
      </form>
    )
  }

}

export default RegistrationCard