import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <WeaterDisplay zip={"12345"} />
        </div>
    )
  }
}

class WeaterDisplay extends React.Component {
  render() {
    return (
        <h1>Displaying some Weather!</h1>
    )
  }
}



export default App;
