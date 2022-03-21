import React from 'react'
import "./App.css"
import { useState } from 'react'
import {
    Link
  } from "react-router-dom";

export default function dayss() {
    // function navigateTodays(event) {
    //     console.log(event)
    // }

    // const [weekDates, setWeekdates] = useState(['Mondays 16', 'Tuesdays 17', 'Wednesdays 18'])

    // var weekdayssList = weekDates.map((weekDate) => {
    //     return (<li key={weekDate}>
    //                 <button onClick={() => navigateTodays(weekDate)}>{weekDate}</button>
    //             </li>)
    //   })

    // const days1 = new Date();
    // const days2 = new Date(days1)
    // days2.setDate(days2.getDate() + 1)

    var days = new Array(16);
    days[0] = new Date();
    for (let i = 1; i < days.length; i++) {
        days[i] = new Date(days[0]);
        days[i].setDate(days[i].getDate() + i)
    }
    
    var weekdays=new Array(7);
    weekdays[0]="SUN";
    weekdays[1]="MON";
    weekdays[2]="TUE";
    weekdays[3]="WED";
    weekdays[4]="THU";
    weekdays[5]="FRI";
    weekdays[6]="SAT";

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
      <div>
          {/* <ul>
             {weekdayssList}
          </ul> */}
          <div className='line'>
            <Link to="/info?cnt=1">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[0].getDay()}`]}</p>
                    <p className='datee'>{`${days[0].getDate()}`}</p>
                    <p className='month'>{months[`${days[0].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=2">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[1].getDay()}`]}</p>
                    <p className='datee'>{`${days[1].getDate()}`}</p>
                    <p className='month'>{months[`${days[1].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=3">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[2].getDay()}`]}</p>
                    <p className='datee'>{`${days[2].getDate()}`}</p>
                    <p className='month'>{months[`${days[2].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=4">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[3].getDay()}`]}</p>
                    <p className='datee'>{`${days[3].getDate()}`}</p>
                    <p className='month'>{months[`${days[3].getMonth()}`]}</p>
                </div>
            </Link>
          </div>
          <div className='line'>
            <Link to="/info?cnt=5">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[4].getDay()}`]}</p>
                    <p className='datee'>{`${days[4].getDate()}`}</p>
                    <p className='month'>{months[`${days[4].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=6">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[5].getDay()}`]}</p>
                    <p className='datee'>{`${days[5].getDate()}`}</p>
                    <p className='month'>{months[`${days[5].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=7">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[6].getDay()}`]}</p>
                    <p className='datee'>{`${days[6].getDate()}`}</p>
                    <p className='month'>{months[`${days[6].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=8">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[7].getDay()}`]}</p>
                    <p className='datee'>{`${days[7].getDate()}`}</p>
                    <p className='month'>{months[`${days[7].getMonth()}`]}</p>
                </div>
            </Link>
          </div>
          <div className='line'>
            <Link to="/info?cnt=9">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[8].getDay()}`]}</p>
                    <p className='datee'>{`${days[8].getDate()}`}</p>
                    <p className='month'>{months[`${days[8].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=10">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[9].getDay()}`]}</p>
                    <p className='datee'>{`${days[9].getDate()}`}</p>
                    <p className='month'>{months[`${days[9].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=11">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[10].getDay()}`]}</p>
                    <p className='datee'>{`${days[10].getDate()}`}</p>
                    <p className='month'>{months[`${days[10].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=12">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[11].getDay()}`]}</p>
                    <p className='datee'>{`${days[11].getDate()}`}</p>
                    <p className='month'>{months[`${days[11].getMonth()}`]}</p>
                </div>
            </Link>
          </div>
          <div className='line'>
            <Link to="/info?cnt=13">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[12].getDay()}`]}</p>
                    <p className='datee'>{`${days[12].getDate()}`}</p>
                    <p className='month'>{months[`${days[12].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=14">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[13].getDay()}`]}</p>
                    <p className='datee'>{`${days[13].getDate()}`}</p>
                    <p className='month'>{months[`${days[13].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=15">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[14].getDay()}`]}</p>
                    <p className='datee'>{`${days[14].getDate()}`}</p>
                    <p className='month'>{months[`${days[14].getMonth()}`]}</p>
                </div>
            </Link>
            <Link to="/info?cnt=16">
                <div className='dateTile'>
                    <p className='day'>{weekdays[`${days[15].getDay()}`]}</p>
                    <p className='datee'>{`${days[15].getDate()}`}</p>
                    <p className='month'>{months[`${days[15].getMonth()}`]}</p>
                </div>
            </Link>
          </div>
        </div>
    )
}

