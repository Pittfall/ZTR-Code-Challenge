import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Route, Switch, Redirect } from 'react-router-dom';

import NavigationItems from './components/Navigation/NavigationItems/NavigationItems'
import Machines from './containers/Machines/Machines'
import NewMachine from './containers/NewMachine/NewMachine';

class App extends Component {
  render() {
   return (
      <BrowserRouter>
        <div className="App">
            <NavigationItems />
            <Switch>
               <Route path="/new-machine:id?" component={NewMachine} />
               <Route path="/machines" component={Machines} />
               <Redirect from="/" to="/machines" />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
