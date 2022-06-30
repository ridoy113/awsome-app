import React from 'react';
import { useState } from 'react';
import './CreateArea.css'


function CreateArea({ submitButton, onAdd }) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(e) {
        const { name, value } = e.target
        setNote(preValue => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }

    function submitButton(event) {
        onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div className='from__info'>
            <form>
                <input
                    value={note.title}
                    type="text"
                    placeholder='Title...'
                    onChange={handleChange}
                    name='title' />


                <p>
                    <textarea
                        value={note.content}
                        name="content"
                        placeholder="Take a Task..."
                        onChange={handleChange}
                    >{" "}</textarea>
                </p>

                <button onClick={submitButton}>Add</button>


            </form>
        </div>
    );
}

export default CreateArea;