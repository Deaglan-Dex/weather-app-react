import React from 'react'
import "./App.css"

export default function HistoryHeader() { // Header with explanation to user on what the search page is for
  return (
    <div>
        <p className='sixteentxt'>Weather Prediction</p>
        <p className='sixteentxt2'>Search</p>
        <p className = 'searchInfo'>Search for statistical weather predictions based on historical data, for each day of the year.</p>
    </div>
  )
}
