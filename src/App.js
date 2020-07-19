import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <WeatherDisplay zip={"12345"} />
        </div>
    )
  }
}

class WeatherDisplay extends React.Component {
  render() {
    return (
        <h1>Displaying weather for city {this.props.zip}</h1>
    )
  }
}



export default App;
