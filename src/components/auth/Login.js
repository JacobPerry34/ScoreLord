import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./Login.css"

class Login extends Component {
    render() {
        return(
        <div>
          <Link to={`/auth/LoginCard`}><button className="logo btn btn-primary">Sign in</button></Link>
        </div>
        )}
}

export default Login