import React from 'react'
import Todate from './Todate'
import Currentemp from './Currentemp'
import Circles from './Circles'
import Navbar from './Navbar'
import Tiles from './Tiles'
import Location from './Location'
import "./App.css"

export default function App() {
    return (
    <div className='page'>
      <Todate />
      <Currentemp />
      <Circles />
      <Tiles />
      <Tiles />
      <Tiles />
      <Location />
      <Navbar />
    </div>
  )
}
