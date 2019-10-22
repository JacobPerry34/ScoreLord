import React, { Component } from "react"
import UserManager from "../modules/UserManager";


class UserEditForm extends Component {
    //set the initial state
    state = {
      id: "",
      name: "",
      email:"",
      password:"",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingUser = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedUser = {
        id: this.props.match.params.userId,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };

      UserManager.update(editedUser)
      .then(() => this.props.history.push("/users"))
    }

    componentDidMount() {
      UserManager.getOneUser(localStorage.getItem('credentials'))
      .then(user => {
          this.setState({
            name: user.name,
            email: user.email,
            password: user.password,
            loadingStatus: false,
          });
      });
    }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="userName">Name:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="email"
                value={this.state.email}
              />
              <label htmlFor="userEmail">Email:</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="password"
                value={this.state.password}
              />
              <label htmlFor="userPassword">Password:</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingUser}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default UserEditForm