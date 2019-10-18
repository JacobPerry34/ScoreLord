import React, { Component } from "react";
import ApplicationViews from "./ApplicationViews";
import NavBar from "./navBar/NavBar";
import "./Main.css";
import { Parallax, Background } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import "./ArcadeBackground.jpg";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ParallaxProvider>
          <Parallax className="parallax">
            <ApplicationViews />
          </Parallax>
        </ParallaxProvider>
      </React.Fragment>
    );
  }
}

export default Main;
