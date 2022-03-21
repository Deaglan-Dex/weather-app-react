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
import Datetimetemp from "./Datetimetemp";
import HighLowTemps from "./HighLowTemps";
import InfoTable from "./InfoTable";
import TempInfo from "./TempInfo";
import SunRiseSet from "./SunRiseSet";
import Status from "./Status";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
    return (
      <Router>
        <div className='page'>
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
          </Switch>
          <Navbar />
        </div>
      </Router>
  )
}
