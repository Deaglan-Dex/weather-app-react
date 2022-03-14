import React from 'react'
import "./App.css"
import precicon from './precicon.png'
import humidicon from './humidicon.png'
import windicon from './windicon.png'

export default function Circles() {
  return (
    <div className='circlediv'>
        <span className='circles'>
            <span class="dot">
                <img className='precicon' src={precicon} alt="precicon" />
                <p className='txt'>15%</p>
            </span>
            <p className='circletxt'>precipitation</p>
        </span>
        <span className='circles2'>
            <span class="dot">
                <img className='precicon' src={humidicon} alt="humidicon" />
                <p className='txt'>52%</p>
            </span>
            <p className='circletxt2'>humidity</p>
        </span>
        <span className='circles'>
            <span class="dot">
                <img className='precicon' src={windicon} alt="windicon" />
                <p className='txt2'>13 mph</p>
            </span>
            <p className='circletxt3'>wind</p>
        </span>
    </div>
  )
}
