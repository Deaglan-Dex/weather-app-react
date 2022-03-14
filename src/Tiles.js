import React from 'react'
import "./App.css"
import rain from './rain.png'

console.log(rain)
export default function tiles() {
    return (
        <div className='tiles'>
          <div className='tdate'>Sat 19th</div>
          <div className='ticon'><img src={rain} /></div>
          <div className='ttemp'>21°</div>
        </div>
      
    )
  }