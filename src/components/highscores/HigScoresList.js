import React, { Component } from 'react'
import HighScoreManager from '../modules/HighScoreManager';
import HighScoresCard from './HighScoresCard';
import NewHighScore from './NewHighScore';
import HighScoresPerMachine from './HighScoresPerMachine';

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
      <h3>High Scores</h3>
      <div className="container-cards">
        {this.state.highScores.map(singleHighScore =>{
          if(singleHighScore.machineId === this.props.machineId){
                  return  <HighScoresPerMachine
                    key={singleHighScore.id}
                    scoreProp={singleHighScore}
                    {...this.props}
                  />
        } else if(this.props.machineId === undefined){
            return  <HighScoresPerMachine
            key={singleHighScore.id}
            scoreProp={singleHighScore}
            {...this.props}
          />
        }
        })}
    </div>
    <NewHighScore {...this.props} machines={this.props.machines}/>
      </React.Fragment>
    )}}






export default HighScoresList