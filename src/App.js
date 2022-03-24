import React, { Component } from 'react';
import Todate from './Todate';
import Currentemp from './Currentemp';
import Circles from './Circles';
import Navbar from './Navbar';
import Tiles from './Tiles';
import Location from './Location';
import Days from './Days';
import Header from './Header';
import HistoryHeader from './HistoryHeader';
import HistorySearch from './HistorySearch';
import "./detailsPage.css";
import Datetimetemp from "./Datetimetemp";
import HighLowTemps from "./HighLowTemps";
import InfoTable from "./InfoTable";
import TempInfo from "./TempInfo";
import SunRiseSet from "./SunRiseSet";
import Status from "./Status";
import HistoryDateTemp from "./HistoryDateTemp";
import HistoryHighLow from "./HistoryHighLow";
import HistoryInfoTable from "./HistoryInfoTable";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function weatherBackg(desc) {
  if (desc === "Clear"){
    return "page-clear";
  }
  else if (desc === "Thunderstorm"){
    return "page-thunderstorm";
  }
  else if (desc === "Snow"){
    return "page-snow";
  }
  else if (desc === "Rain"){
    return "page-rain";
  }
  else {
    return "page-clouds";
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
    console.log(lat)
    console.log(lon)
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=0002ba6db11e43059c746878dacce316&units=metric";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ weather: data, loading: false });
    console.log("ahhh" + url);
    console.log(this.state.weather.weather[0].main);
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

    var descr = this.state.weather.weather[0].main;
    return (
      <Router>
          <div className={weatherBackg(descr)}>
            <Switch>
              <Route exact path='/'>
                <Link to="/info?cnt=1">
                  <Todate />
                  <Currentemp />
                  <Circles />
                </Link>
                <Tiles />
                <Location />
              </Route>
              <Route exact path='/sixteen'>
                <Header />
                <Days />
              </Route>
              <Route exact path='/info'>
                <Datetimetemp />
                <HighLowTemps />
                <Status />
                <SunRiseSet />
                <TempInfo />
                <InfoTable />
              </Route>
              <Route exact path='/search'>
                <HistoryHeader />
                <HistorySearch />
              </Route>
              <Route exact path='/history'>
                <HistoryDateTemp />
                <HistoryHighLow />
                <HistoryInfoTable />
              </Route>
            </Switch>
            <Navbar />
          </div>
        </Router>
    )}
}
export default App;
