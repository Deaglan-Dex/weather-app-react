import React, { Component } from 'react'
import "./App.css"
import {
  Link
} from "react-router-dom";

var days = new Array(3);
var temp = new Date();
for (let i = 0; i < days.length; i++) {
  days[i] = new Date(temp);
  days[i].setDate(days[i].getDate() + (i+1));
}

var weekdays=new Array(7);
weekdays[0]="Sun";
weekdays[1]="Mon";
weekdays[2]="Tue";
weekdays[3]="Wed";
weekdays[4]="Thu";
weekdays[5]="Fri";
weekdays[6]="Sat";

function dateEnd(date) {
  if (date == 1 || date == 21 || date == 31) {
    return date + "st";
} else if (date == 2 || date == 22) {
    return date + "nd";
  } else if (date == 3 || date == 23) {
    return date + "rd";
  } else {
    return date + "th";
  }
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
    const url = "https://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon + "&cnt=4&appid=0002ba6db11e43059c746878dacce316&units=metric";
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

    var icon1 = "http://openweathermap.org/img/wn/" + this.state.weather.list[1].weather[0].icon + "@2x.png";
    console.log(icon1)
    var icon2 = "http://openweathermap.org/img/wn/" + this.state.weather.list[2].weather[0].icon + "@2x.png";
    var icon3 = "http://openweathermap.org/img/wn/" + this.state.weather.list[3].weather[0].icon + "@2x.png";

    return (
      <div>
        <Link to="/info?cnt=2">
          <div className='tiles'>
            <div className='tdate'>{weekdays[`${days[0].getDay()}`]} {dateEnd(`${days[0].getDate()}`)}</div>
            <div className='ticon'><img src={icon1} /></div>
            <div className='ttemp'>{Math.round(this.state.weather.list[1].temp.day)}°</div>
          </div>
        </Link>
        <Link to="/info?cnt=3">
          <div className='tiles'>
            <div className='tdate'>{weekdays[`${days[1].getDay()}`]} {dateEnd(`${days[1].getDate()}`)}</div>
            <div className='ticon'><img src={icon2} /></div>
            <div className='ttemp'>{Math.round(this.state.weather.list[2].temp.day)}°</div>
          </div>
        </Link>
        <Link to="/info?cnt=4">
          <div className='tiles'>
            <div className='tdate'>{weekdays[`${days[2].getDay()}`]} {dateEnd(`${days[2].getDate()}`)}</div>
            <div className='ticon'><img src={icon3} /></div>
            <div className='ttemp'>{Math.round(this.state.weather.list[3].temp.day)}°</div>
          </div>
        </Link>
      </div>
    )
  }
}

export default App;