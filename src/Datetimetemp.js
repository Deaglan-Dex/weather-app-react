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
  
      var temp = Math.round(this.state.weather.main.temp);
  
      var icon = "http://openweathermap.org/img/wn/" + this.state.weather.weather[0].icon + "@2x.png";
      
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      const time = current.getHours() + ':' + current.getMinutes();

      return (
          
        <div>
            <h2 className = "date">{date}</h2>
            <h2 className = "time">{time}</h2>
            <div className='ahhh'>
                <h1 className = "mainTemp">8<sup className='super'>&#176;C</sup></h1>
            </div>
        </div>
      )
    }
  }
  
  export default App;