import React from 'react';
import './Note.css'



function Note({ title, content, onDelete, id }) {
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>

            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default Note;