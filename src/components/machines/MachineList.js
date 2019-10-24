import React, { Component } from 'react'
import MachineCard from './MachineCard';
import MachineManager from '../modules/MachineManager';
import './MachineList.css'
//import the components we will need



class MachineList extends Component {
    //define what this component needs to render
    state = {
        arcadeId: "",
        machines: [],
        search:""
    };

componentDidMount(){
    MachineManager.getAllMachines()
    .then(machinesFromDatabase => {
        this.setState({
            machines: machinesFromDatabase,
        });
    });
};

handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }


render(){
    console.log("MachineList: Render");

    return(
        <React.Fragment>
        <section className="section-content">
      </section>
      <input type="text" onChange={this.handleFieldChange} id="search" placeholder="Find a game"/>

      <div className="container-cards-list">
        {this.state.machines.filter(singleMachine =>
          singleMachine.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || singleMachine.genre.name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1 ||
          singleMachine.arcade.name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1)
       .map(singleMachine =>{
// possibly map through machines twice with a different param, thus giving two seperate keys
         if(singleMachine.arcadeId === this.props.arcadeId){
                 return <div>   <MachineCard
                    key={singleMachine.id}
                    machineProp={singleMachine}
                    arcades= {this.state.arcades}
                    {...this.props}
                  /> </div>
         } else if(this.props.arcadeId === undefined){
             return <div> <MachineCard
                            key ={singleMachine.id}
                            machineProp={singleMachine}
                            arcades ={this.state.arcades}
                            {...this.props} /></div>
         }


         })}
    </div>
      </React.Fragment>)
    }
}






export default MachineList