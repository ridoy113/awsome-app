import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css'



export default function Footer() {

    const [date, setDate] = useState(new Date());
    return (
        <div className='calender__info'>
            <h1 className=''>Calendar</h1>
            <div>
                <Calendar onChange={setDate} value={date} selectRange={true} />
            </div>
            {date.length > 0 ? (
                <p>
                    <span>Start:</span>{' '} {date[0].toDateString()}
                    &nbsp; to &nbsp;
                    <span>End:</span> {date[1].toDateString()}
                </p>
            ) : (
                <p>
                    <span>Default selected date:</span>{' '} {date.toDateString()}
                </p>
            )}
        </div>
    )
}