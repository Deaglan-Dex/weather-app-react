import React from 'react'
import Todate from './Todate'
import Currentemp from './Currentemp'
import Circles from './Circles'
import Navbar from './Navbar'
import Tiles from './Tiles'
import Location from './Location'
import Days from './Days'
import Header from './Header'

import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

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
          </Switch>
          <Navbar />
        </div>
      </Router>
  )
}
