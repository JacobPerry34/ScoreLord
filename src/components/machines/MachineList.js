import React, { Component } from 'react'
import MachineCard from './MachineCard';
import MachineManager from '../modules/MachineManager';
//import the components we will need



class MachineList extends Component {
    //define what this component needs to render
    state = {
        machines: []
    };

componentDidMount(){
    MachineManager.getAllMachines()
    .then(machinesFromDatabase => {
        this.setState({
            machines: machinesFromDatabase
        });
    });
}

render(){
    console.log("MachineList: Render");

    return(
        <React.Fragment>
        <section className="section-content">
      </section>
      <div className="container-cards">
        {this.state.machines.map(singleMachine =>
                    <MachineCard
                    key={singleMachine.id}
                    machineProp={singleMachine}
                    {...this.props}
                  />
                )}
    </div>
      </React.Fragment>
    )}}






export default MachineList