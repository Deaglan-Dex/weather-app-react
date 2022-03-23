import React, { Component } from 'react'
import "./detailsPage.css";

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
      return (
        <div>
          <table className = "tempInfo">
            <tr>
              <td>morning temp: {Math.round(this.state.weather.list[(window.count - 1)].temp.morn)}<sup>&#176;C</sup></td>
              <td>day temp: {Math.round(this.state.weather.list[(window.count - 1)].temp.day)}<sup>&#176;C</sup></td>
            </tr>
            <tr>
              <td>evening temp: {Math.round(this.state.weather.list[(window.count - 1)].temp.eve)}<sup>&#176;C</sup></td>
              <td>night temp: {Math.round(this.state.weather.list[(window.count - 1)].temp.night)}<sup>&#176;C</sup></td>
            </tr>
          </table>
        </div>
      )
    }
  }
  
  export default App;