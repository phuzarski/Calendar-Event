import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Calendar from './components/calendar';

class App extends Component {

  render() {
    return (
      <div>
        <Calendar />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.querySelector('.terminplaner'));
