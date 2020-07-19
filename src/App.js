import React from 'react';
// import logo from './logo.svg';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class WeatherDisplay extends React.Component {
  render() {
    return <h1>Displaying weather for city {this.props.name} {this.props.zip}</h1>;
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
        <div className="App">
          {PLACES.map((place, index) => (
              <button
                key={index}
                onClick={() => {
                  this.setState({activePlace: index})
                }}
              >
                {place.name}
              </button>
          ))}
          <WeatherDisplay
              key={activePlace}
              zip={PLACES[activePlace].zip}
              name={PLACES[activePlace].name}
          />
        </div>
    )
  }
}

export default App;
