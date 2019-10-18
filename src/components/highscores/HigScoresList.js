import React, { Component } from 'react'
import HighScoreManager from '../modules/HighScoreManager';
import HighScoresCard from './HighScoresCard';
import NewHighScore from './NewHighScore';

//import the components we will need



class HighScoresList extends Component {
    //define what this component needs to render
    state = {
        highScores: [],
    };

componentDidMount(){
    HighScoreManager.getAllHighScores()
    .then(scoresFromDatabase => {
        this.setState({
            highScores: scoresFromDatabase
        });
    });
}

render(){
    console.log("HighScoresList: Render");

    return(
        <React.Fragment>
        <section className="section-content">
      </section>
      <div className="container-cards">
        {this.state.highScores.map(singleHighScore =>
                    <HighScoresCard
                    key={singleHighScore.id}
                    scoreProp={singleHighScore}
                    {...this.props}
                  />
                )}
    </div>
    <NewHighScore {...this.props} machines={this.props.machines}/>
      </React.Fragment>
    )}}






export default HighScoresList