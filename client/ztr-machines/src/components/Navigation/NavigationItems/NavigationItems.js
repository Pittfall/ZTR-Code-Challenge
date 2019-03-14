import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import '../Navigation.css'

const navigationItems = () => (
  <header>
    <nav className="Navigation">
      <ul>
        <NavigationItem link="/machines">Machines</NavigationItem>
        <NavigationItem link="/new-machine">New Machine</NavigationItem>
      </ul>
    </nav>
  </header>
);

export default navigationItems;