import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./navBar/NavBar";
import './Main.css'

class Main extends Component{
    render(){
        return (
            <React.Fragment>
                <NavBar/>
                <ApplicationViews/>
            </React.Fragment>
        )
    }
}

export default Main