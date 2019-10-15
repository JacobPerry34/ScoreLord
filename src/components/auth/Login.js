import React, { Component } from "react"
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return(
        <div>
          <Link to={`/auth/LoginCard`}><button>Sign in</button></Link>
        </div>
        )}
}

export default Login