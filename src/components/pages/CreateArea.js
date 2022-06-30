import React from 'react';
import './CreateArea.css'




function CreateArea(props) {
    return (
        <div className='from__info'>
            <form>
                <input type="text" placeholder='Title...' name='title' />
                <p>
                    <textarea
                        name="content"
                        placeholder="Take a Task..."
                    >{" "}</textarea>
                </p>
            </form>
        </div>
    );
}

export default CreateArea;