import React from 'react'
import "./App.css"
import cloudicon from './cloudicon.png'

export default function Currentemp() {
  return (
    <div>
        <p className='tempnum'>8</p>
        <p className='tempdeg'>°C</p>
        <img className='tempicon' src={cloudicon} alt="cloudicon" />
        <p className='tempdesc'>Cloudy</p>
    </div>
  )
}
