import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './NewMachine.css';
import { AddNewMachine } from '../../Http/API/API';

class NewMachine extends Component {
    state = {
        name: '',
        make: '',
        longitude: '',
        latitude: '',
        submitted: false
    }

    machineDataHandler = () => {
        const data = {
            name: this.state.name,
            make: this.state.make,
            longitude: this.state.longitude,
            latitude: this.state.latitude
        }
        
        AddNewMachine(data)
            .then(response => {
                console.log(response);
                this.setState({submitted: true});
            })
            .catch(error => {
               console.log(error);
           });
    }

    render () {
        const redirect = this.state.submitted ? <Redirect to="/machines" /> : null;
        return (
            <div className="NewMachine">
                {redirect}
                <h1>Add a Machine</h1>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <label>Make</label>
                <input type="text" value={this.state.make} onChange={(event) => this.setState({make: event.target.value})} /> 
                <label>Latitude</label>
                <input type="text" value={this.state.latitude} onChange={(event) => this.setState({latitude: event.target.value})} /> 
                <label>Longitude</label>
                <input type="text" value={this.state.longitude} onChange={(event) => this.setState({longitude: event.target.value})} />               
                <button onClick={this.machineDataHandler}>Add Machine</button>
            </div>
        );
    }
}

export default NewMachine;