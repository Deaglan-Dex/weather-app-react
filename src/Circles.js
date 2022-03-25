import React, { Component } from 'react'
import "./App.css"
import humidicon from './humidity2.png'
import windicon from './windicon2.png'
import cloudicon from './cloudicon2.png'

// Fetches and shows cloudiness, humidity and wind data on the main home page.
class App extends Component {
    state = {
      loading: true,
      weather: null
    };
  
    async componentDidMount() {
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
  
      return (
        <div className='circlediv'>
          {/* the below HTML code is for the circles displayed on various pages */}
            <span className='circles'>
                <span class="dot">
                    {/* these are the icons */}
                    <img className='precicon' src={cloudicon} alt="precicon" /> 
                    {/* these are the data taken from the API */}
                    <p className='txt'>{this.state.weather.clouds.all}%</p>
                </span>
                <p className='circletxt'>cloudiness</p>
            </span>
            <span className='circles2'>
                <span class="dot">
                    <img className='precicon' src={humidicon} alt="humidicon" />
                    <p className='txt'>{this.state.weather.main.humidity}%</p>
                </span>
                <p className='circletxt2'>humidity</p>
            </span>
            <span className='circles'>
                <span class="dot">
                    <img className='precicon1' src={windicon} alt="windicon" />
                    <p className='txt2'>{this.state.weather.wind.speed} m/s</p>
                </span>
                <p className='circletxt3'>wind</p>
            </span>
        </div>
      )
    }
}
  
export default App;
            