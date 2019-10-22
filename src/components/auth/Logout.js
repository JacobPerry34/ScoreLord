import React, { Component } from 'react'
class Logout extends Component {
  //logout function to remove userId from database
  handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('credentials')
    //redirects to login page
    this.props.history.push("/")};
    //Form Print Render function
  render() {
    return (
      <>
    <button type="submit" onClick={this.handleLogOut}>Logout</button>
    </>
    )
  }
}
export default Logout