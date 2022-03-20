import React, { Component } from 'react'
import "./App.css"
import cloudicon from './cloudicon.png'

class App extends Component {
  state = {
    loading: true,
    weather: null
  };

  async componentDidMount() {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=0002ba6db11e43059c746878dacce316&units=metric";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ weather: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.weather) {
      return <div>didn't get weather</div>;
    }

    // var temp = this.state.weather.main.temp - 273.15
    var temp = Math.round(this.state.weather.main.temp);

    var icon = "http://openweathermap.org/img/wn/" + this.state.weather.weather[0].icon + "@2x.png";

    return (
      <div>
          <div className='box'>
            <p className='tempnum'>{('0' + temp).slice(-2)}</p>
            <p className='tempdeg'>°C</p>
          </div>
          <div className='inline'>
            <img className='tempicon' src={icon} alt="cloudicon" />
            <p className='tempdesc'>{this.state.weather.weather[0].main}</p>
          </div>
          
      </div>
    )
  }
}

export default App;
