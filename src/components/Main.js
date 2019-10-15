import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./navBar/NavBar";

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