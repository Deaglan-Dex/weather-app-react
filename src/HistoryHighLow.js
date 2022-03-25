import React, { Component } from 'react'
import "./detailsPage.css";

function kelToCel(temp) {
  var newtemp = Math.round(temp - 273.15);
  return newtemp;
}

// Fetches and displays average highest and lowest temperature of a day that the user searched
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
    window.month = urlParams.get('month')
    window.day = urlParams.get('day')
    console.log(window.month);
    console.log(window.day);
    var url = "https://history.openweathermap.org/data/2.5/aggregated/day?lat=" + lat + "&lon=" + lon + "&month=" + window.month + "&day=" + window.day + "&appid=0002ba6db11e43059c746878dacce316"
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

      var hightemp = kelToCel(this.state.weather.result.temp.average_max);
      var lowtemp = kelToCel(this.state.weather.result.temp.average_min);
      
      return (
        <div className="highhh1">
            <p className="highlowtemp1">H: {hightemp}<sup>&#176;C</sup></p>
            <p className="highlowtemp1">L: {lowtemp}<sup>&#176;C</sup></p>
        </div>
      )
    }
  }
  
  export default App;