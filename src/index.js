import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/calendar'

class App extends Component {

  render() {
    return (
        <Calendar />
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
