import React, { Component } from 'react';
import './Container.css';
import Ticket from './ticket';

class Container extends Component {
  render() {
    return (
      <div className="container">
         <Ticket />
      </div>
    );
  }
}

export default Container;
