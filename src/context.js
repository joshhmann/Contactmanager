import React, { Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-555'
      },
      {
        id: 2,
        name: 'Dimmy Doe',
        email: 'ddoe@gmail.com',
        phone: '555-555-555'
      },
      {
        id: 3,
        name: 'Limmy Doe',
        email: 'ldoe@gmail.com',
        phone: '555-555-555'
      }
    ]
  }

  render() {
    return (
      <Context.Provider value={this.state}
    )
  }
}
