import React, { Component } from 'react'
import "./detailsPage.css";

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var day = weekdays[a.getDay()];
  var date = dateEnd(a.getDate());
  var time = day + ' ' + date + ' ' + month + ' ' + year;
  return time;  
}

var weekdays=new Array(7);
weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function dateEnd(date) {
  if (date === 1 || date === 21 || date === 31) {
    return date + "st";
  } else if (date === 2 || date === 22) {
    return date + "nd";
  } else if (date === 3 || date === 23) {
    return date + "rd";
  } else {
    return date + "th";
  }
}

var months=new Array(7);
months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
      if (window.count === 1) {
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
      if (window.locale === 0) {
        return <div>Please enable location services and make sure browser has access to it</div>;
      }
  
      if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.weather) {
        return <div>didn't recieve weather information</div>;
      }

      if (window.count === 1) {
        const current = new Date();
        var date = weekdays[`${current.getDay()}`] + " " + dateEnd(`${current.getDate()}`) + " " + months[`${current.getMonth()}`] + " " + `${current.getFullYear()}`;
        var time = ('0' + current.getHours()).slice(-2) + ':' + ('0' + current.getMinutes()).slice(-2);
        console.log(date);
        console.log(time);
        var temp = <div className='ahhh'><h1 className = "mainTemp">{Math.round(this.state.weather.main.temp)}<sup className='super'>&#176;C</sup></h1></div>
      } else {
        var date = timeConverter(this.state.weather.list[(window.count - 1)].dt)
        var temp = <div className='ahhh'><h1 className = "mainTemp2">average temp<br></br> {Math.round(this.state.weather.list[window.count - 1].temp.day)}<sup className='super'>&#176;C</sup></h1></div>
      }
      return (
          
        <div>
            <h2 className = "date">{date}</h2>
            <h2 className = "time">{time}</h2>
            {temp}
        </div>
      )
    }
  }
  
  export default App;