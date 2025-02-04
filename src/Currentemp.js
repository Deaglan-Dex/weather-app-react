import React, { Component } from 'react'
import "./App.css"

class App extends Component {
  state = {
    loading: true,
    weather: null
  };

  async componentDidMount() {  // To get the weather conditions according to user's current location
    window.locale = 0;

    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(
        function(position) {
          // console.log("Latitude is :", position.coords.latitude);
          // console.log("Longitude is :", position.coords.longitude);
          localStorage.setItem('lat', position.coords.latitude);
          localStorage.setItem('lon', position.coords.longitude);
          window.locale = 1;
        },
        function(error) {
          console.error("Error Code = " + error.code + " - " + error.message);
        }
      );
    } else {
      console.log("Not Available");
    }
    var lat = localStorage.getItem('lat');
    var lon = localStorage.getItem('lon');
    // console.log(lat)
    // console.log(lon)
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=0002ba6db11e43059c746878dacce316&units=metric";
    console.log(url)
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ weather: data, loading: false });
  }

  render() {
    if (window.locale == 0) {
      return <div>Please enable location services and make sure browser has access to it</div>;
    }

    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.weather) {
      return <div>didn't recieve weather information</div>;
    }

    // the below variable takes the current temperature from the API and rounds it
    // it then assigns it to the variable temp
    var temp = Math.round(this.state.weather.main.temp);

    // the below variable takes the icon code from the API and inputs it in the image address URL
    // it then assigns it to the variable icon
    var icon = "http://openweathermap.org/img/wn/" + this.state.weather.weather[0].icon + "@2x.png";

    return (
      <div>
        <div className='tempwrapper'>
            <div className='box'>
              {/* the below HTML displays the temp with the degrees and ensures its 2 digits */}
              <p className='tempnum'>{('0' + temp).slice(-2)}</p>
              <p className='tempdeg'>°C</p>
            </div>
            <div className='inline'>
              {/* the below HTML displays the icon and the current weather description from the API */}
              <img className='tempicon' src={icon} alt="cloudicon" />
              <p className='tempdesc'>{this.state.weather.weather[0].main}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default App;
