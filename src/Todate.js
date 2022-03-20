import React from 'react'
import "./App.css"

export default function Todate() {
  const current = new Date();
  // const date = `${current.getDay()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const day = `${current.getDay()}`;
  const date = `${current.getDate()}`;
  const month = `${current.getMonth()}`;

  var weekday=new Array(7);
  weekday[0]="SUN";
  weekday[1]="MON";
  weekday[2]="TUE";
  weekday[3]="WED";
  weekday[4]="THU";
  weekday[5]="FRI";
  weekday[6]="SAT";

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
  months[0]="JAN";
  months[1]="FEB";
  months[2]="MAR";
  months[3]="APR";
  months[4]="MAY";
  months[5]="JUN";
  months[6]="JUL";
  months[7]="AUG";
  months[8]="SEP";
  months[9]="OCT";
  months[10]="NOV";
  months[11]="DEC";

  return (
    <div className='datediv'>
        <p className='smalldate1'>{weekday[day]}</p>
        <p className='bigdate'>{finaldate}</p>
        <p className='smalldate2'>{months[month]}</p>
    </div>
  )
}