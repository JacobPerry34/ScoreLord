import React, { Component } from "react";
import { Link } from "react-router-dom"
import './NavBar.css'
import Logout from "../auth/Logout";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark fixed-center light-blue flex-md-nowrap p-0 shadow center">
                <ul className="nav nav-pills">
                     <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/machines">Machines</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/users/">User Profile</Link>
                        </li>
                     <Logout {...this.props} />
                </ul>
            </nav>
                )
            }
        }

export default NavBar
