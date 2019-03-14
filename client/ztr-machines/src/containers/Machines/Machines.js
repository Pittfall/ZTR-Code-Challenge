import React, { Component } from 'react';

import './Machines.css';
import Machine from '../../components/Machine/Machine';
import { GetMachines } from '../../Http/API/API';

class Machines extends Component {
  state = {
    machines: [],
    error: false
  }

  componentDidMount () {
   GetMachines()
      .then(response => {
        const machines = response.data;
            
          this.setState({machines : machines});
      })
      .catch(error => {
          this.setState({error: true});
          console.log(error);
      });
  }

  machineClickHandler = (id) => {
    this.props.history.push({pathname: '/new-machine/' + id})
  }

  render () {
    let machines = <p style={{textAlign: 'center'}}>Something went wrong</p>
    
    if (!this.state.error) {
      machines = this.state.machines.map(machine => {
            return (
                <Machine 
                  key={machine.id} 
                  name={machine.name} 
                  make={machine.make}
                  longitude={machine.longitude}
                  latitude={machine.latitude}
                  clicked={() => this.machineClickHandler(machine.id)} />
            );
        });
    }

    return (
      <div>
        <section className="Machines">
          {machines}
        </section>
      </div>
    );
  }
}

export default Machines;