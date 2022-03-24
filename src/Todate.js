import React from 'react'
import "./App.css"

export default function Todate() {
  const current = new Date();
  const day = `${current.getDay()}`;
  const date = `${current.getDate()}`;
  const month = `${current.getMonth()}`;

  var weekday=new Array(7);
  weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  if (date == 1 || date == 21 || date == 31) {
    var finaldate = date + "st";
  } else if (date == 2 || date == 22) {
    var finaldate = date + "nd";
  } else if (date == 3 || date == 23) {
    var finaldate = date + "rd";
  } else {
    var finaldate = date + "th";
  }

  var months=new Array(7);
  months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  return (
    <div className='datediv'>
        <p className='smalldate1'>{weekday[day]}</p>
        <p className='bigdate'>{finaldate}</p>
        <p className='smalldate2'>{months[month]}</p>
    </div>
  )
}