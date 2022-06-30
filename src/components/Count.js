import React from 'react';
import './Count.css'



function Count({ count }) {
    return (
        <div className='Count'>
            <h3>{count}</h3>
        </div>
    );
}

export default Count;