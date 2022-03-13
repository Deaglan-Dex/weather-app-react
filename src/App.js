import React from 'react'
import Navbar from './Navbar'
import Tiles from './Tiles'
import "./App.css"

export default function App() {
  return (
    <div className='page'>
      <Tiles />
      <Navbar />
    </div>
  )
}
