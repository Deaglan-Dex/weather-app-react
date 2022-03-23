import React, { Component } from 'react'
import "./App.css"
import humidicon from './humidity2.png'
import windicon from './windicon2.png'
import cloudicon from './cloudicon2.png'
import precicon from './precicon2.png'
import volicon from './volume.png'
import diricon from './wdirection.png'


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
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      window.count = urlParams.get('cnt')
      console.log(window.count);
      var url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=16&appid=0002ba6db11e43059c746878dacce316&units=metric";
      const newurl = url
      console.log(newurl)
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

      var rain = 0;
      if (this.state.weather.list[(window.count - 1)].rain != null) {
        rain = this.state.weather.list[(window.count - 1)].rain;
      }
      return (
        <div className='infoTable'>
          <div className='circlediv'>
            <span className='circles'>
                <span class="dot">
                    <img className='precicon' src={cloudicon} alt="precicon" />
                    <p className='txt'>{this.state.weather.list[(window.count - 1)].clouds}%</p>
                </span>
                <p className='circletxt'>cloudiness</p>
            </span>
            <span className='circles2'>
                <span class="dot">
                    <img className='precicon' src={humidicon} alt="humidicon" />
                    <p className='txt'>{this.state.weather.list[(window.count - 1)].humidity}%</p>
                </span>
                <p className='circletxt2'>humidity</p>
            </span>
            <span className='circles3'>
                <span class="dot">
                    <img className='precicon' src={windicon} alt="windicon" />
                    <p className='txt2'>{Math.round(this.state.weather.list[(window.count - 1)].gust)} m/s</p>
                </span>
                <p className='circletxt3'>wind</p>
            </span>
          </div>
          <div className='circlediv'>
            <span className='circles'>
                <span class="dot">
                    <img className='precicon' src={diricon} alt="precicon" />
                    <p className='txt'>{this.state.weather.list[(window.count - 1)].deg}°</p>
                </span>
                <p className='circletxt6'>direction</p>
            </span>
            <span className='circles2'>
                <span class="dot">
                    <img className='precicon' src={volicon} alt="humidicon" />
                    <p className='txt'>{Math.round(rain)}mm</p>
                </span>
                <p className='circletxt5'>rain volume</p>
            </span>
            <span className='circles'>
                <span class="dot">
                    <img className='precicon' src={precicon} alt="windicon" />
                    <p className='txt2'>{this.state.weather.list[(window.count - 1)].pop}%</p>
                </span>
                <p className='circletxt4'>precipitation</p>
            </span>
          </div>
        </div>
      )
    }
  }
  
  export default App;