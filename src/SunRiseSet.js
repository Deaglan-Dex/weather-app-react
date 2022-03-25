import React, { Component } from 'react'
import "./detailsPage.css";
import sunriseImg from './Sunrise.png';
import sunsetImg from './Sunset.png'

function timeConverter(UNIX_timestamp){ // UNIX time converter function to get a readable time format hh:mm
    var a = new Date(UNIX_timestamp * 1000);
    var hour = ('0' + a.getHours()).slice(-2);
    var min = ('0' + a.getMinutes()).slice(-2);
    var time = hour + ':' + min;
    return time;  
  }

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
      var url = ""
      if (window.count == 1) {
        url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=0002ba6db11e43059c746878dacce316&units=metric";
      } else {
        url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=16&appid=0002ba6db11e43059c746878dacce316&units=metric";
      }
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
      var sunrise = "";
      var sunset = "";
      if (window.count == 1) {
        sunrise = timeConverter(this.state.weather.sys.sunrise);
        sunset = timeConverter(this.state.weather.sys.sunset);
      } else {
        sunrise = timeConverter(this.state.weather.list[(window.count - 1)].sunrise);
        sunset = timeConverter(this.state.weather.list[(window.count - 1)].sunset);
      }
      return ( // Renders sunrise and sunset times on the details page
        <div>
            <table className = "sunRiseSet">
                <tr>
                    <td>
                        <img src = {sunriseImg} alt = "Null"/>
                    </td>
                    <td>
                        <img src = {sunsetImg} alt = "Null"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        {sunrise}
                    </td>
                    <td>
                        {sunset}
                    </td>
                </tr>
            </table>
        </div>
      )
    }
  }

  export default App;