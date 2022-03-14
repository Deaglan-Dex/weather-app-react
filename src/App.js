import React from 'react'
import Todate from './Todate'
import Currentemp from './Currentemp'
import Circles from './Circles'
import Navbar from './Navbar'
import "./App.css"

export default function App() {
    return (
    <div className='page'>
      <Todate />
      <Currentemp />
      <Circles />
      <Navbar />
    </div>
  )
}
