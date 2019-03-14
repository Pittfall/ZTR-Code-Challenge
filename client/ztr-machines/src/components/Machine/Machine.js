import React from 'react';
import { withRouter } from 'react-router-dom';

import './Machine.css';

const machine = (props) => (
    <article className="Machine" onClick={props.clicked}>
         <h1>{props.name}</h1>
         <div className="Detail">{props.make}</div>
         <div className="Detail">{props.longitude}</div>
         <div className="Detail">{props.latitude}</div>
    </article>
);

export default withRouter(machine);