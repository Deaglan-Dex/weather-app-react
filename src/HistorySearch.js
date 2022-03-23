import React from 'react';
import "./App.css";
import { useState } from 'react';
import {
    Redirect
  } from "react-router-dom";

export default function HistorySearch() {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        return <Redirect to = "/history" />
        // alert(`The day you entered was: ${day} and the month you entered was ${month}`);

    }
  return (
    <form>
        <fieldset className = 'searchForm'>
            <label>Day: </label>
            <input type = 'number' min = '1' max = '31' value = {day} onChange = {(e) => setDay(e.target.value)} className = 'searchText'/><br/>
            <label>Month:</label>
            <input type = 'number' min = '1' max = '12' value = {month} onChange = {(e) => setMonth(e.target.value)} className = 'searchText'/><br/>
            <input type = 'submit' onClick = {handleSubmit} className = 'searchSubmit' />
        </fieldset>
    </form>
  )
}