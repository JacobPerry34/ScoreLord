import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Logout extends Component {
  //logout function to remove userId from database
  handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('credentials')}
    //Form Print Render function
  render() {
    return (
      <>
    <Link to="/"><button type="submit" onClick={this.handleLogOut}>Logout</button></Link>
    </>
    )
  }
}
export default Logout