import React from 'react';
import "./App.css";
import { useState } from 'react';
import {
    useHistory
  } from "react-router-dom";

export default function HistorySearch() {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");

    const history = useHistory();
  
    const handleSubmit = () => {
      if (parseInt(month) > 12 && parseInt(month) < 1) {
        alert("Please input a month between 1 and 12");
      } else if (parseInt(day) > 31 && parseInt(day) < 1) {
        alert("Please input a month between 1 and 31");
      } else {
        history.push({
          pathname: '/history',
          search: `?month=${month}&day=${day}`
      })
    }
    }
  return (
    <form>
        <fieldset className = 'searchForm'>
          <div className='searchTexts'>
              <input type = 'number' min = '1' max = '31' value = {day} onChange = {(e) => setDay(e.target.value)} className = 'searchText' placeholder='Day' required/><br/>
              <input type = 'number' min = '1' max = '12' value = {month} onChange = {(e) => setMonth(e.target.value)} className = 'searchText' placeholder='Month' required/><br/>
          </div>    
            <input type = 'submit' onClick = {handleSubmit} className = 'searchSubmit' value='Search' />
        </fieldset>
    </form>
  )
}