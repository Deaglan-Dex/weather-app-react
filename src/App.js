import React from 'react'
import Todate from './Todate'
import Currentemp from './Currentemp'
import Circles from './Circles'
import Navbar from './Navbar'
import Tiles from './Tiles'
import Location from './Location'
import Days from './Days'
import Header from './Header'
import "./detailsPage.css";
import HighLowTemps from "./HighLowTemps";
import InfoTable from "./InfoTable";
import TempInfo from "./TempInfo";
import SunRiseSet from "./SunRiseSet";
import Status from "./Status";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const DetailsPage = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const time = current.getHours() + ':' + current.getMinutes();
return (
  <div className = "detailsPage">
      <h2 className = "date">{date}</h2>
      <h2 className = "time">{time}</h2>
      <div className='ahhh'>
        <h1 className = "mainTemp">8<sup className='super'>&#176;C</sup></h1>
      </div>
      <HighLowTemps />
      <Status />
      <SunRiseSet />
      <TempInfo />
      <InfoTable />
  </div>
)}

export default function App() {
    return (
      <Router>
        <div className='page'>
          <Switch>
            <Route exact path='/'>
              <Todate />
              <Currentemp />
              <Circles />
              <Tiles />
              <Tiles />
              <Tiles />
              <Location />
            </Route>
            <Route exact path='/six'>
              <Header />
              <Days />
            </Route>
            <Route exact path='/info'>
              {DetailsPage}
            </Route>
          </Switch>
          <Navbar />
        </div>
      </Router>
  )
}
