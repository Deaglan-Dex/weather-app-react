import React from 'react'
import "./App.css"
import home from './home.png'
import sixteen from './sixteen.png'
import search from './search.png'
import notif from './notif.png'
import burger from './burger.png'
import {
  Link
} from "react-router-dom";

console.log(home);
console.log(sixteen);
console.log(search);
console.log(notif);
console.log(burger);

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to="/">
        <img className='home' src={home} alt="Home" />
      </Link>
      <Link to="/sixteen">
        <img className='sixteen' src={sixteen} alt="sixteen" />
      </Link>
      <Link to="/search">
        <img className='search' src={search} alt="search" />
      </Link>
      <Link to="/info?cnt=1">
        <img className='burger' src={burger} alt="burger" />
      </Link>
    </div>
  )
}
